"use client";

import { useState, useSyncExternalStore } from "react";
import type { FormEvent } from "react";
import styles from "./ContactForm.module.css";

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
};

const storageKey = "conrado-portfolio-contact-submissions";
const updateEventName = "conrado-contact-submissions-updated";
const emptySnapshot = "[]";
const invalidSnapshot = "__CONTACT_SUBMISSIONS_INVALID__";
const unavailableSnapshot = "__CONTACT_STORAGE_UNAVAILABLE__";

function isContactSubmission(value: unknown): value is ContactSubmission {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return (
    "id" in value &&
    typeof value.id === "string" &&
    "name" in value &&
    typeof value.name === "string" &&
    "email" in value &&
    typeof value.email === "string" &&
    "subject" in value &&
    typeof value.subject === "string" &&
    "message" in value &&
    typeof value.message === "string" &&
    "submittedAt" in value &&
    typeof value.submittedAt === "string" &&
    !Number.isNaN(Date.parse(value.submittedAt))
  );
}

function readTextField(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function subscribeToSubmissions(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(updateEventName, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(updateEventName, onStoreChange);
  };
}

function getClientSnapshot() {
  try {
    const savedSubmissions = window.localStorage.getItem(storageKey);

    if (savedSubmissions === null) {
      return emptySnapshot;
    }

    const parsedSubmissions: unknown = JSON.parse(savedSubmissions);

    return Array.isArray(parsedSubmissions) &&
      parsedSubmissions.every(isContactSubmission)
      ? savedSubmissions
      : invalidSnapshot;
  } catch {
    return unavailableSnapshot;
  }
}

function getServerSnapshot() {
  return emptySnapshot;
}

function parseSubmissions(snapshot: string): ContactSubmission[] {
  if (snapshot === emptySnapshot) {
    return [];
  }

  const parsedSubmissions: unknown = JSON.parse(snapshot);

  if (
    !Array.isArray(parsedSubmissions) ||
    !parsedSubmissions.every(isContactSubmission)
  ) {
    throw new Error("Os registros de contato têm um formato inválido.");
  }

  return parsedSubmissions;
}

export default function ContactForm() {
  const snapshot = useSyncExternalStore(
    subscribeToSubmissions,
    getClientSnapshot,
    getServerSnapshot,
  );
  const storageReady =
    snapshot !== invalidSnapshot && snapshot !== unavailableSnapshot;
  const submissions = storageReady ? parseSubmissions(snapshot) : [];
  const storageError =
    snapshot === invalidSnapshot
      ? "Os registros salvos têm um formato inválido. O formulário ficará indisponível."
      : snapshot === unavailableSnapshot
        ? "Não foi possível acessar o armazenamento deste navegador. O formulário ficará indisponível."
        : null;
  const [writeError, setWriteError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setWriteError(null);

    if (!form.reportValidity()) {
      return;
    }

    if (!storageReady) {
      setWriteError("O armazenamento local ainda não está disponível.");
      return;
    }

    const formData = new FormData(form);
    const name = readTextField(formData, "name");
    const email = readTextField(formData, "email");
    const subject = readTextField(formData, "subject");
    const message = readTextField(formData, "message");

    if (!name || !email || !subject || !message) {
      setFeedback(null);
      setWriteError("Preencha todos os campos antes de enviar.");
      return;
    }

    const submission: ContactSubmission = {
      id: window.crypto.randomUUID(),
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString(),
    };
    const nextSubmissions = [...submissions, submission];

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(nextSubmissions));
    } catch (error) {
      console.error("Não foi possível salvar o registro de contato.", error);
      setFeedback(null);
      setWriteError(
        "Não foi possível salvar o registro. Verifique o armazenamento do navegador e tente novamente.",
      );
      return;
    }

    window.dispatchEvent(new Event(updateEventName));
    setFeedback("Registro salvo neste navegador.");
    form.reset();
  }

  return (
    <section className={styles.formCard} aria-labelledby="contact-form-title">
      <h2 id="contact-form-title">Envie uma mensagem</h2>
      <p className={styles.notice}>
        Este formulário salva os registros somente neste navegador; não envia
        e-mail.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="contact-name">Nome</label>
          <input
            autoComplete="name"
            id="contact-name"
            maxLength={100}
            name="name"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email">E-mail</label>
          <input
            autoComplete="email"
            id="contact-email"
            maxLength={254}
            name="email"
            required
            type="email"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-subject">Assunto</label>
          <input
            id="contact-subject"
            maxLength={160}
            name="subject"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-message">Mensagem</label>
          <textarea
            id="contact-message"
            maxLength={3000}
            name="message"
            required
            rows={5}
          />
        </div>

        {(storageError || writeError) && (
          <p className={styles.error} role="alert">
            {storageError ?? writeError}
          </p>
        )}
        {feedback && (
          <p className={styles.feedback} role="status">
            {feedback}
          </p>
        )}

        <button className={styles.submitButton} disabled={!storageReady} type="submit">
          Enviar
        </button>
      </form>

      <section className={styles.submissions} aria-labelledby="submissions-title">
        <h2 id="submissions-title">Registros enviados</h2>
        {submissions.length === 0 ? (
          <p className={styles.emptyState}>Nenhum registro salvo neste navegador.</p>
        ) : (
          <ul className={styles.submissionList}>
            {submissions.map((submission) => (
              <li className={styles.recordCard} key={submission.id}>
                <h3>{submission.subject}</h3>
                <p>
                  <strong>Nome:</strong> {submission.name}
                </p>
                <p>
                  <strong>E-mail:</strong> {submission.email}
                </p>
                <p>
                  <strong>Mensagem:</strong> {submission.message}
                </p>
                <time dateTime={submission.submittedAt}>
                  {new Intl.DateTimeFormat("pt-BR", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  }).format(new Date(submission.submittedAt))}
                </time>
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
}

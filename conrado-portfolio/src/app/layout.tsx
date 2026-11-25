import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Conrado Schorn | Portfólio",
    template: "%s | Conrado Schorn",
  },
  description:
    "Portfólio de Conrado Schorn, estudante de Desenvolvimento de Software Full Stack Java.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

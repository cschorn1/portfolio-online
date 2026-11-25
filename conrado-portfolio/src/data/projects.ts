export type PortfolioProject = {
  name: string;
  description: string;
  technologies: string[];
  screenshot: {
    src: string;
    alt: string;
  } | null;
  githubUrl: string | null;
  demo:
    | { status: "available"; url: string }
    | { status: "unavailable" }
    | { status: "pending" };
};

export const projects: PortfolioProject[] = [
  {
    name: "FunTasks",
    description:
      "Gerenciador de tarefas com criação, edição, conclusão, exclusão, filtragem e ordenação. Persiste os dados no localStorage.",
    technologies: ["Next.js", "TypeScript", "localStorage"],
    screenshot: {
      src: "/projects/fun-tasks.avif",
      alt: "Página inicial do gerenciador de tarefas FunTasks.",
    },
    githubUrl: "https://github.com/cschorn1/fun-tasks",
    demo: { status: "available", url: "https://fun-tasks-pi.vercel.app/" },
  },
  {
    name: "Ricetta Divina",
    description:
      "Blog de receitas com catálogo, categorias e páginas de detalhes com ingredientes e modo de preparo.",
    technologies: ["Next.js"],
    screenshot: {
      src: "/projects/ricetta-divina.avif",
      alt: "Página inicial do blog de receitas Ricetta Divina.",
    },
    githubUrl: "https://github.com/cschorn1/ricetta-divina",
    demo: { status: "unavailable" },
  },
  {
    name: "Todo List",
    description:
      "Lista de tarefas para adicionar, concluir, excluir e filtrar itens, com integração a uma API e suporte offline.",
    technologies: ["React", "TypeScript", "API", "Offline"],
    screenshot: {
      src: "/projects/todo-list.avif",
      alt: "Página inicial do projeto Todo List.",
    },
    githubUrl: "https://github.com/cschorn1/todo-recoil",
    demo: { status: "unavailable" },
  },
  {
    name: "Restaurante com microfrontends",
    description:
      "Três aplicações Next.js integradas, com cardápio e opções para incluir, alterar e remover itens do pedido.",
    technologies: ["Next.js", "Microfrontends"],
    screenshot: {
      src: "/projects/restaurante-microfrontend.avif",
      alt: "Página inicial do projeto de restaurante com microfrontends.",
    },
    githubUrl: "https://github.com/cschorn1/microfrontend",
    demo: { status: "unavailable" },
  },
  {
    name: "Diário de Bordo PWA",
    description:
      "Aplicação instalável e offline para criar, excluir e ordenar registros, com persistência no localStorage.",
    technologies: ["PWA", "localStorage", "Offline"],
    screenshot: {
      src: "/projects/diario-de-bordo.avif",
      alt: "Página inicial da aplicação Diário de Bordo PWA.",
    },
    githubUrl: "https://github.com/cschorn1/diario-de-bordo-pwa",
    demo: { status: "unavailable" },
  },
];

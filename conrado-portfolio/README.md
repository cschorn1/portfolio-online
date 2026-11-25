# Portfólio — Conrado Schorn

Portfólio responsivo desenvolvido com Next.js, TypeScript e CSS Modules. O site apresenta informações pessoais e profissionais, projetos, habilidades e formas de contato.

## Acessos

- **Portfólio online:** ❌ PREENCHER LINK DO DEPLOY
- **Repositório público:** [github.com/cschorn1/portfolio-online](https://github.com/cschorn1/portfolio-online)

## Executar localmente

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

Para validar a versão de produção localmente:

```bash
npm run build
npm run start
```

## Páginas

- **Home:** resumo das seções do portfólio.
- **Sobre Mim:** apresentação profissional e pessoal.
- **Projetos:** projetos do curso, tecnologias, screenshots e links.
- **Habilidades:** tecnologias organizadas por categoria.
- **Contato:** formulário demonstrativo que salva registros no `localStorage` do navegador. Não envia e-mail nem dados para um servidor.

## Projetos apresentados

1. **FunTasks:** gerenciador de tarefas com criação, edição, conclusão, exclusão, filtros, ordenação e persistência local. [GitHub](https://github.com/cschorn1/fun-tasks) · [Demonstração](https://fun-tasks-pi.vercel.app/)
2. **Ricetta Divina:** blog de receitas com catálogo, categorias e páginas de detalhes. [GitHub](https://github.com/cschorn1/ricetta-divina) · Sem demonstração online.
3. **Todo List:** lista de tarefas com integração a uma API e suporte offline. [GitHub](https://github.com/cschorn1/todo-recoil) · Sem demonstração online.
4. **Restaurante com microfrontends:** três aplicações integradas com cardápio e gerenciamento dos itens do pedido. [GitHub](https://github.com/cschorn1/microfrontend) · Sem demonstração online.
5. **Diário de Bordo PWA:** aplicação instalável e offline para gerenciar registros com persistência local. [GitHub](https://github.com/cschorn1/diario-de-bordo-pwa) · Sem demonstração online.

## Organização

- `src/app/`: páginas e estilos específicos de cada rota.
- `src/components/`: header, footer, hero e componentes compartilhados.
- `src/data/`: dados apresentados no portfólio.
- `public/`: imagens e outros arquivos estáticos.

## Informações pendentes

- Link do deploy do portfólio.

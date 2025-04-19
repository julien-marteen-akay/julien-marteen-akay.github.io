# Personal Website of Julien Marteen Akay

This repository contains the source code for the personal website of Julien Marteen Akay, built using Astro and Tailwind CSS.

The website serves as a portfolio showcasing:
*   Biography and Research Interests
*   Educational Background
*   List of Publications
*   Blog Posts (linking to external sources like Medium)
*   Contact Information and Social Links
*   Link to CV

## ✨ Features

*   **Framework:** [Astro](https://astro.build/) for performance and developer experience.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) with a custom dark theme and accent colors.
*   **Typography:** Styled using `@tailwindcss/typography`.
*   **Content:** Managed primarily through Markdown files in `src/pages/`.
*   **Layout:** Consistent structure provided by `src/layouts/BaseLayout.astro` and `src/layouts/MarkdownLayout.astro`.
*   **Components:** Reusable UI elements in `src/components/`.
*   **Deployment:** Configured for deployment via GitHub Pages (Assumed - check `.github/workflows/` if needed).

## 🚀 Project Structure Overview

```
.
├── public/             # Static assets (images, favicon)
├── src/
│   ├── components/     # Reusable Astro components (Header, Footer, Button, etc.)
│   ├── layouts/        # Page layouts (BaseLayout, MarkdownLayout)
│   ├── pages/          # Site pages and content (index.astro, about.astro, blog/, publications/)
│   └── styles/         # Global styles (global.css)
├── .github/            # GitHub Actions workflows (if deployment is configured)
├── .gitignore
├── astro.config.mjs    # Astro configuration
├── package.json        # Project manifest & dependencies
├── README.md           # This file
├── tailwind.config.mjs # Tailwind configuration (dark theme, custom colors, typography)
└── tsconfig.json       # TypeScript configuration
```

## 🧞 Available Commands

All commands are run from the root of the project in a terminal:

| Command           | Action                                         |
| :---------------- | :--------------------------------------------- |
| `npm install`     | Installs dependencies                          |
| `npm run dev`     | Starts local dev server at `localhost:4321`    |
| `npm run build`   | Builds the production site to `./dist/`        |
| `npm run preview` | Previews the production build locally          |

## Deployment

This site is intended for deployment on GitHub Pages. The build output is generated in the `dist/` directory.

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

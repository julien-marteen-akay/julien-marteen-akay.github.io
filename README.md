# Personal Website of Julien Marteen Akay

This repository contains the source code for the personal website of Julien Marteen Akay, built using [Astro](https://astro.build/) and Tailwind CSS.

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

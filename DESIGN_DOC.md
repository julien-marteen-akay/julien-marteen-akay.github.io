# Personal Website Redesign - Design Doc (Work in Progress)

## 1. Goal

To create a new, modern, sophisticated personal website for Julien Marteen Akay, replacing the existing Hugo-based site. Key requirements include:

*   **Aesthetics:** Dark theme, retro-inspired highlight colors (blue, orange, green, red, cyan, yellow, magenta), modern look and feel.
*   **Dynamics:** Moving background, potentially other subtle animations.
*   **Content:** Showcase biography, research interests, education, publications, projects/posts, social links, and CV.
*   **Deployment:** Continue using GitHub Pages deployed via GitHub Actions.
*   **Technology:** Open to a new stack for efficiency and desired results (moving away from the old Hugo template).

## 2. Technology Stack

*   **Framework:** [Astro](https://astro.build/)
    *   **Reasoning:** Excellent performance (minimal JS by default), great DX, component-based architecture, built-in support for Markdown/MDX (easing content migration), flexibility to use UI components from various libraries if needed, easy integration with static hosting like GitHub Pages.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
    *   **Reasoning:** Utility-first approach allows for rapid UI development and easy implementation of the custom dark theme and retro color palette. Integrates seamlessly with Astro.
*   **Deployment:** GitHub Actions + GitHub Pages (workflow to be updated)

## 3. Project Structure Overview

```
.
├── backup/             # Backup of original Hugo site (content, .github)
├── node_modules/       # Node dependencies
├── public/             # Static assets (images, favicon)
│   └── avatar.jpg      # User's profile picture
├── src/
│   ├── components/     # Reusable Astro components
│   │   ├── MovingBackground.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Button.astro
│   ├── layouts/        # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/          # Site pages (routes)
│   │   ├── index.astro      # Homepage
│   │   ├── about.astro      # About page (placeholder content)
│   │   └── projects.astro   # Projects page (placeholder content - link removed from header)
│   └── styles/         # Global styles
│       └── global.css    # Base Tailwind directives
├── .gitignore
├── astro.config.mjs    # Astro configuration (Tailwind integration, Vite settings)
├── package.json        # Node project manifest & dependencies
├── README.md           # (Needs updating for Astro project)
├── tailwind.config.mjs # Tailwind configuration (dark mode, custom retro colors)
└── tsconfig.json       # TypeScript configuration for Astro
```

## 4. Implemented Features (Current State)

*   **Core Setup:** Basic Astro project initialized and dependencies installed.
*   **Styling:** Tailwind CSS integrated, configured for `class`-based dark mode. Custom `retro-*` color palette added to `tailwind.config.mjs`. Global styles imported in `BaseLayout`.
*   **Base Layout:** `src/layouts/BaseLayout.astro` created, includes HTML boilerplate, imports global styles, sets dark mode, includes Header, Footer, and Moving Background. Uses flexbox to ensure footer stays at the bottom.
*   **Moving Background:** `src/components/MovingBackground.astro` implemented using a CSS animated gradient, applied globally via `BaseLayout`.
*   **Header:** `src/components/Header.astro` created with site title (linking home) and dynamic navigation links (`Home`, `About`, `Publications`, `Blog`). Styled with transparency, blur, sticky positioning, and retro colors.
*   **Footer:** `src/components/Footer.astro` created with copyright info and "Built with" message, using retro colors.
*   **Button Component:** `src/components/Button.astro` created for reusable, styled buttons supporting different retro colors (solid/outlined) and link/button behavior.
*   **Homepage:** `src/pages/index.astro` updated with a Hero section featuring:
    *   Name (`retro-cyan`)
    *   Role/Title (`retro-yellow`)
    *   Tagline
    *   Profile picture (`public/avatar.jpg`) with `retro-magenta` border.
    *   Styled `Button` components linking to About page and CV.
*   **Placeholder Pages:** `src/pages/about.astro` and `src/pages/projects.astro` created, using `BaseLayout`. (Note: `projects.astro` link removed from header).
*   **Dev Server Fix:** Added `tailwindcss` to `vite.optimizeDeps.include` in `astro.config.mjs` to resolve dev server hanging issue in the container.

## 5. Content Migration

*   Original Hugo content backed up in `backup/content/`.
*   Key information extracted from `backup/content/authors/admin/_index.md` (bio, interests, education, social links, CV).
*   Identified content types: `publication` (1 item), `post` (1 item - VICReg).
*   Located `avatar.jpg` and copied to `public/`.
*   **Strategy:** Use `.astro` pages for core structure (Home, About). Use Markdown/MDX files (likely in `src/pages/publications/` and `src/pages/blog/`) for listable content, rendered via a shared Markdown layout.

## 6. Next Steps

1.  **Populate About Page:** Update `src/pages/about.astro` with detailed content extracted from the profile Markdown (avatar, bio, interests, education, social links, CV button).
2.  **Create Content Pages & Layout:**
    *   Create `src/pages/publications/index.astro` (list page).
    *   Create `src/pages/blog/index.astro` (list page).
    *   Create `src/layouts/MarkdownLayout.astro` for styling individual publication/blog post pages.
    *   Migrate the content for the `transferability_ssl_wound_recognition` publication and the `vicreg` post into Markdown files within appropriate directories (e.g., `src/pages/publications/transferability.../index.md`, `src/pages/blog/vicreg/index.md`).
3.  **Homepage Content Sections:** Add sections below the hero on `src/pages/index.astro` to display summaries/links to recent publications and blog posts.
4.  **Refine Styling:** Further enhance UI elements with retro colors and potentially add subtle hover/focus animations.
5.  **GitHub Actions:** Retrieve the old workflow from `backup/.github/workflows/`, adapt it to build and deploy the Astro site to GitHub Pages.
6.  **README Update:** Update `README.md` with instructions for setting up and running the Astro project. 

## 7. TODO List

*   **Content Implementation:**
    *   [ ] **Populate About Page:** Update `src/pages/about.astro` with detailed content (avatar, bio, interests, education, social links, CV button).
    *   [ ] **Create Publication List Page:** Create `src/pages/publications/index.astro`.
    *   [ ] **Create Blog List Page:** Create `src/pages/blog/index.astro`.
    *   [ ] **Create Markdown Layout:** Create `src/layouts/MarkdownLayout.astro` for styling publication/blog content.
    *   [ ] **Migrate Publication Content:** Create and populate Markdown file for `transferability_ssl_wound_recognition` (e.g., `src/pages/publications/transferability_ssl_wound_recognition.md`).
    *   [ ] **Migrate Blog Post Content:** Create and populate Markdown file for `vicreg` post (e.g., `src/pages/blog/vicreg.md`).
    *   [ ] **Add Homepage Content Sections:** Add sections to `src/pages/index.astro` to display recent publications and blog posts.
*   **UI/UX Refinement:**
    *   [ ] **Styling Enhancements:** Review and refine styling across all pages and components, ensuring consistent use of retro colors and dark theme.
    *   [ ] **About Page: Social Icons:** Replace text labels for social links with actual icons (requires icon library or SVGs).
    *   [ ] **Animations:** Consider adding subtle hover/focus animations to buttons, links, or cards.
    *   [ ] **Responsiveness:** Test and refine responsiveness on different screen sizes.
    *   [ ] **User Feedback:** Request intermediate feedback on look, feel, and content presentation.
*   **Deployment & Documentation:**
    *   [ ] **GitHub Actions Workflow:** Retrieve, adapt, and test the GitHub Actions workflow from `backup/.github/workflows/` for Astro deployment to GitHub Pages.
    *   [ ] **README Update:** Update `README.md` with setup, run, build, and deployment instructions for the new Astro project.
*   **Project Management:**
    *   [ ] **Update TODOs:** Keep this list updated as tasks are completed or new ones arise. 
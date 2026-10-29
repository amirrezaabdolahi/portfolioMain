# Amireza Abdolahi — Developer Portfolio

A personal developer portfolio built with **Next.js 14**, **React 18**, and **Tailwind CSS**. It showcases my frontend development skills, projects, technical interests, and professional profile.

**Live Website:** [amirrezaabdollahi.vercel.app](https://amirrezaabdollahi.vercel.app)  
**GitHub Repository:** [portfolioMain](https://github.com/amirrezaabdolahi/portfolioMain)

## Overview

This portfolio presents my work and experience as a frontend developer. It is built with the Next.js App Router and reusable React components, combining responsive layouts, interactive UI elements, and page transitions.

My primary technical interests include React, Next.js, TypeScript, modern JavaScript, component-based architecture, state management, and building maintainable web applications.

## Features

- Personal introduction and professional profile
- Portfolio work and project showcase
- Services section
- Résumé page and CV download
- Contact page
- Reusable React components
- Responsive layouts with Tailwind CSS
- Page transitions and UI animations with Framer Motion
- Social media and professional profile links
- SEO metadata and canonical URL configuration
- Open Graph and Twitter card metadata
- Person structured data using Schema.org JSON-LD
- Dynamically generated `robots.txt` and `sitemap.xml`
- Deployment on Vercel

## Tech Stack

| Technology | Purpose |
| --- | --- |
| [Next.js 14](https://nextjs.org/) | React framework and App Router |
| [React 18](https://react.dev/) | UI development |
| [Tailwind CSS](https://tailwindcss.com/) | Styling and responsive design |
| [Framer Motion](https://www.framer.com/motion/) | Animations and page transitions |
| [Lucide React](https://lucide.dev/) | Icons |
| [Radix UI](https://www.radix-ui.com/) | Accessible UI primitives |
| [Swiper](https://swiperjs.com/) | Sliders and carousels |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |

## Pages

The application includes the following routes:

- `/` — Home and personal introduction
- `/work` — Portfolio projects
- `/services` — Services and areas of expertise
- `/resume` — Résumé
- `/contact` — Contact information

## Getting Started

### Prerequisites

- Node.js compatible with the installed Next.js version
- npm

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/amirrezaabdolahi/portfolioMain.git
cd portfolioMain
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

Create a production build and start the application:

```bash
npm run build
npm run start
```

## Project Structure

```text
.
├── app/
│   ├── contact/
│   ├── resume/
│   ├── services/
│   ├── work/
│   ├── globals.css
│   ├── layout.jsx
│   ├── page.jsx
│   ├── robots.js
│   └── sitemap.js
├── components/
├── lib/
├── public/
├── package.json
└── README.md
```

- `app/page.jsx` — Home page, page-specific metadata, and Person structured data.
- `app/layout.jsx` — Root layout, shared metadata, fonts, and application shell.
- `app/robots.js` — Generates crawler access rules and references the sitemap.
- `app/sitemap.js` — Generates the XML sitemap.
- `components/` — Reusable UI components.
- `lib/` — Shared utilities and supporting code.
- `public/` — Static assets, images, and other public files.

## SEO

The project includes a foundation for technical SEO through the Next.js Metadata API and metadata route conventions.

Current SEO-related features include:

- Page titles and meta descriptions
- Canonical URL configuration
- Open Graph metadata
- Twitter card metadata
- Person structured data using JSON-LD
- Robots rules
- XML sitemap generation

These features help search engines discover and interpret the website, but do not guarantee indexing or search rankings.

After deployment, verify the website using [Google Search Console](https://search.google.com/search-console) and submit the sitemap:

`https://amirrezaabdollahi.vercel.app/sitemap.xml`

Keep the canonical URLs, structured data, and sitemap consistent with the production domain. Update the sitemap whenever public routes change.

## Deployment

The portfolio is deployed on [Vercel](https://vercel.com/).

To deploy your own instance, import the repository into Vercel and follow its Next.js deployment workflow.

For more information, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contact

- **Portfolio:** [amirrezaabdollahi.vercel.app](https://amirrezaabdollahi.vercel.app)
- **GitHub:** [@amirrezaabdolahi](https://github.com/amirrezaabdolahi)
- **LinkedIn:** [Amireza Abdolahi](https://www.linkedin.com/in/amireza-abdolahi-283710349)

---

Built by **Amireza Abdolahi**.

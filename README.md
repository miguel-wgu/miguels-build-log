# Miguel's Build Log

A personal portfolio documenting my embedded systems learning journey — projects, build notes, and tutorials.

Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

**Live site:** https://miguels-build-log.vercel.app/

---

## Getting started

```bash
npm install       # install dependencies (first time only)
npm run dev       # start the dev server at http://localhost:3000
```

## Commands

```bash
npm run dev       # start development server (Turbopack, with hot reload)
npm run build     # production build — checks for TypeScript and lint errors
npm run start     # run the production build locally (run build first)
npm run lint      # run ESLint to catch code issues
```

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — site-wide header, nav, footer
│   ├── page.tsx            # Home page  →  /
│   ├── globals.css         # Global styles; Tailwind imported here
│   ├── projects/
│   │   ├── page.tsx        # Projects index  →  /projects
│   │   └── [slug]/
│   │       └── page.tsx    # Individual project  →  /projects/:slug
│   └── about/
│       └── page.tsx        # About page  →  /about
public/                     # Static assets (images, icons) — referenced as /filename
```

---

## Where to update things

| What                                  | Where                                     |
|---------------------------------------|-------------------------------------------|
| Site title / meta description         | `metadata` export in `src/app/layout.tsx` |
| Nav links                             | `<nav>` in `src/app/layout.tsx`           |
| Footer text                           | `<footer>` in `src/app/layout.tsx`        |
| Global colors / fonts / CSS variables | `src/app/globals.css`                     |
| Home page content                     | `src/app/page.tsx`                        |
| Projects list                         | `src/app/projects/page.tsx`               |
| Individual project content            | `src/app/projects/[slug]/page.tsx`        |

---

## Adding a new page

Create a `page.tsx` file inside a folder under `src/app/`. The folder name becomes the URL.

```
src/app/notes/page.tsx  →  /notes
```

Minimal page template:

```tsx
export default function NotesPage() {
    return (
        <div>
            <h1>Notes</h1>
        </div>
    );
}
```

## Adding a new project

Add a new entry to the projects data source and create a corresponding route under `src/app/projects/[slug]/`.

---

## Deployment

The site is deployed on [Vercel](https://vercel.com) and auto-deploys on every push to `main`.

---

## Tech stack

| Tool                                         | Purpose                                 |
|----------------------------------------------|-----------------------------------------|
| [Next.js 16](https://nextjs.org)             | React framework with file-based routing |
| [TypeScript](https://www.typescriptlang.org) | Type safety                             |
| [Tailwind CSS v4](https://tailwindcss.com)   | Utility-first styling                   |
| [Geist](https://vercel.com/font)             | Sans-serif and mono fonts               |
---
status: pending
title: Hello World App
---

Project currently contains only env.example and README.md — scaffold everything from scratch.

1. Create package.json (ESM, "type": "module") with scripts dev (vite), build (tsc -b && vite build), preview (vite preview). Dependencies: react, react-dom, @tanstack/react-router. Dev dependencies: vite, @vitejs/plugin-react, typescript, @types/react, @types/react-dom, @types/node, tailwindcss, @tailwindcss/vite, @tanstack/router-plugin. npm only.
   - Outcome: `npm install` resolves all packages.

2. Create tsconfig.json (strict, target ES2022, module ESNext, moduleResolution bundler, jsx react-jsx, noEmit, include src) with baseUrl "." and paths mapping "@/*" to "src/*".
   - Outcome: `@/` imports type-check.

3. Create vite.config.ts registering plugins in order: TanStack router plugin (target react, autoCodeSplitting enabled) from @tanstack/router-plugin/vite, then @vitejs/plugin-react, then @tailwindcss/vite. Add resolve.alias "@" → path to src.
   - Outcome: router plugin generates src/routeTree.gen.ts automatically; Tailwind compiles; alias works at runtime.

4. Create index.html at project root with a `<div id="root">`, title "Hello World", and a module script pointing to /src/main.tsx.
   - Outcome: Vite entry point exists.

5. Create src/styles/global.css whose first line is exactly `@import "tailwindcss";` (optionally followed by minimal base rules such as a font-family on body).
   - Outcome: single stylesheet with Tailwind enabled.

6. Create src/main.tsx: import "@/styles/global.css" once, create the router from the generated routeTree (import from "./routeTree.gen"), declare the TanStack Router Register module augmentation, and render RouterProvider into #root inside StrictMode.
   - Outcome: app boots with type-safe routing.

7. Create src/routes/__root.tsx using createRootRoute with a component rendering a full-height layout wrapper (e.g. min-h-screen, soft gradient background) containing `<Outlet />`.
   - Outcome: app shell wraps all routes.

8. Create src/routes/index.tsx using createFileRoute("/") rendering a centered card/section (flex, items-center, justify-center, min-h-screen) with a large bold "Hello, World!" heading and a short friendly subtitle (e.g. "Welcome to your new app — happy building!") in muted text. Optionally move the heading into src/components/Greeting.tsx and import via "@/components/Greeting".
   - Outcome: visiting "/" shows the styled greeting.

9. Add a .gitignore covering node_modules and dist. Never create or edit src/routeTree.gen.ts by hand — it is produced by the router plugin on dev/build.
   - Outcome: `npm run dev` serves the Hello World page at "/"; `npm run build` succeeds.

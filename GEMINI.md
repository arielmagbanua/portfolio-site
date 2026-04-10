# Project Overview
`portfolio-site` is a modern web application built with **Next.js 16.2.3**, **React 19**, and **Tailwind CSS 4**. It is a portfolio website project using the **App Router** architecture for optimized routing and server-side rendering.

## Core Technologies
- **Next.js 16.2.3**: Utilizing the latest features and App Router for page management.
- **React 19**: Leveraging concurrent features and advanced hooks.
- **Tailwind CSS 4**: Modern styling with the latest Tailwind features and PostCSS integration.
- **TypeScript 5**: Ensuring type safety across the codebase.
- **ESLint 9**: Standard Next.js linting configuration with vitals and TypeScript support.

## Building and Running
The following commands are available via `npm` (or your preferred package manager):

- **Development**: `npm run dev`
  Starts the development server at `http://localhost:3000`.
- **Production Build**: `npm run build`
  Compiles the application for production deployment.
- **Start Production Server**: `npm run start`
  Runs the built application locally.
- **Linting**: `npm run lint`
  Runs ESLint to check for code quality and style issues.

## Development Conventions
- **Routing**: Uses the `app/` directory (App Router). Pages are defined in `page.tsx` within their respective route folders.
- **Styling**: Tailwind CSS is used globally. Global styles are managed in `app/globals.css`. Component-specific styles should follow Tailwind utility-first patterns.
- **Components**: Functional components using React 19 features are preferred.
- **Types**: Strict TypeScript rules are enabled. Define interfaces and types in `**/*.ts` or `**/*.tsx` files. Path aliases are configured (e.g., `@/*` points to the root).
- **Fonts**: Optimized using `next/font`. **Geist** and **Geist Mono** are the primary font families.
- **Icons/Images**: Next.js `Image` component is used for optimized image handling. Default SVGs are located in the `public/` directory.

## Project Structure
- `app/`: Contains the application's routes, layouts, and global styles.
- `public/`: Static assets such as images and fonts.
- `next.config.ts`: Next.js specific configuration.
- `tsconfig.json`: TypeScript compiler configuration.
- `eslint.config.mjs`: ESLint rules and ignores.
- `postcss.config.mjs`: PostCSS configuration for Tailwind CSS.

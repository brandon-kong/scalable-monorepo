# Technology Stack

I am documenting the technology stack I'm using for this project. Due to the nature of development, this will always be a work in progress. I will try to keep it up to date as much as possible.

## Structure

The project is a Turborepo monorepo with the following structure:

```bash
.
├── apps
│   ├── docs
│   └── web
├── packages
│   ├── config
│   ├── db
│   ├── eslint-config
│   ├── prisma
│   ├── server
│   ├── shared
│   ├── tailwind-config
│   └── types
├── tooling
│   ├── biome
│   ├── tailwind
│   └── typescript
├── .env
├── .env.example
├── .gitignore
├── biome.json
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── turbo.json
```

## Frontend

### Next.js

I've used Next.js for a while so it's a natural choice for the frontend. I like the way it handles routing and react server components. 

### React

Because Next.js is built on top of React, I was given no choice but to use React. I like the way it handles state and the component model.

### Tailwind CSS

I've also been using Tailwind CSS for a while, and I love how easy it is to go from a bare-bones design to a fully fleshed-out design. The customizability is also a big plus, especially with the new v4 features.

## Backend

### NestJS

This is my first time using NestJS, but I like the way it handles routing and the modularity of the framework. I also like the way it handles dependency injection and the way it integrates with TypeScript.

## Developer Tools

### Biome

I've used ESLint/Prettier for a while, but I wanted to try something better and more robust. Biome is a relatively new tool that combines linters and formatters. I like that it integrates nicely with Turborepo and has a fast linting/formatting process. It also has a nice UI for viewing linting errors and warnings.


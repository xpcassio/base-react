# BASE PROJECT - REACT

I use this to start base project in React.

## What it's using?

- [Vite](https://vitejs.dev/)
  For build and local development.

- [Vite Plugin: SVGR](https://github.com/pd4d10/vite-plugin-svgr)
  Vite plugin to transform SVGs into React components

- [TailwindCSS](https://tailwindcss.com/)
  A utility-first CSS framework.

- [Prettier](https://prettier.io/)
  An opinionated code formatter on save.

- [Prettier Plugin: Organize Imports](https://github.com/simonhaenisch/prettier-plugin-organize-imports)
  Organize Imports

- [React router](https://github.com/remix-run/react-router)
  React Router is a multi-strategy router

## What it's different from doing manually?

- Better **.gitignore**.
- Already installed **TailwindCSS** with Vite.
- Already installed **Eslint** rules.
- Removed mock files and folders.
- Added folder structure.
- Already installed **Prettier** and configured to work with Eslint.
  - Plugin to organize imports.

## Initial configuration

1. Copy the folder
2. Change the project informations inside de following files:

- ./index.html
- ./package.json

3. Run `npm i` to install dependencies

## How to remove Git

1. Remove git track with `rm -rf .git`

## How to remove Tailwindcss

1. Remove Tailwindcss from the configuration on `./vite.config.ts`
2. Run `npm remove @tailwindcss/vite && npm remove tailwindcss` to remove plugins
3. Delete imports inside the `./src/App.css` file

## How to add boostrap

1. Run `npm install react-bootstrap` e `npm install bootstrap`
2. Adicione `import 'bootstrap'` no arquivo `./src/App.tsx`

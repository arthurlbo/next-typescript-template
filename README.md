### Hi there! 👋

> A template created to be reused in some projects saving a lot of time and make our lives easier 🤍

## What is inside?

- [NextJS](https://nextjs.org/docs)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Cypress](https://www.cypress.io/)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://commitlint.js.org/#/)

## Getting Started

### Install dependencies:

```bash
pnpm install
```

or

```bash
yarn
```

or

```bash
npm install
```

### Run development server

```bash
pnpm dev
```

or

```bash
yarn dev
```

or

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

```
└── src
    ├── app
    ├── components
```

| Folder         | Description                                          |
| ----------     | -------------------------------------------          |
| **app**        | Pages                                   |
| **components** | Pages components                                     |

## Conventions

### Components

```
└── <MyComponent>
    ├── <MyComponent>.tsx
    ├── <MyComponent>.spec.tsx
    ├── <MyComponent>.stories.tsx
    └── index.ts
```

| Files           | Description                                    |
| --------------- | ---------------------------------------------- |
| **.tsx**        | Component implementation                       |
| **.spec.tsx**   | Component tests                                |
| **.stories.tsx**| Storybook component                            |
| **index.ts**    | File to export the component                   |

## Commands

- `dev`: run development server
- `build`: creates the production build version
- `lint`: runs the linter in all components and pages
- `storybook`: runs docs with storybook
- `cypress`: open cypress
- `test`: run test file
- `commit`: commit staged changes

<p align="center">Made with 🤍 by Arthur</p>

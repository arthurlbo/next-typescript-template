### Hi there! 👋

> A template created to be reused in some projects saving a lot of time and make our lives easier. Modified from this [repository](https://github.com/giovannalinda/next-typescript-template). 🤍

## What is inside?

- [NextJS](https://nextjs.org/docs)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Styled Components](https://styled-components.com/docs)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Jest](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://commitlint.js.org/#/)

## Getting Started

### Install dependencies:

```bash
yarn
```

or

```bash
npm install
```

### Run development server

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
    ├── __helpers__
    ├── components
    ├── pages
    ├── styles
```

| Folder         | Description                                          |
| ----------     | -------------------------------------------          |
| **helpers**    | Functions to handle the tests                        |
| **components** | Page components                                      |
| **pages**      | Pages components                                     |
| **styles**     | Application styles                                   |

## Conventions

### Components

```
└── <MyComponent>
    ├── <MyComponent>.tsx
    ├── <MyComponent>.test.tsx
    ├── <MyComponent>.styled.ts
    ├── <MyComponent>.stories.tsx
    └── index.ts
```

| Files           | Description                                    |
| --------------- | ---------------------------------------------- |
| **.tsx**        | Component implementation                       |
| **.test.tsx**   | Component tests                                |
| **.styled.ts**  | Component stylesheet using `styled-components` |
| **.stories.tsx**| Storybook component                            |
| **index.ts**    | File to export the component                   |

## Commands

- `dev`: run development server
- `build`: creates the production build version
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `storybook`: runs docs with storybook

<p align="center">Made with 💜 by Arthur</p>

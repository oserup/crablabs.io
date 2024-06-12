# CrabLabs

## Installation

1. Install Node >= v22.3.0
2. Clone repo
3. cd into repo
4. Run `npm install` to install dependencies

## Usage

Start server by running the following:

```sh
npm run dev
```

Then go to http://localhost:4321/ or whatever the terminal spits out after `npm run dev` and you should be able to view the site.

Inspect page to check different size screens.

#### Notes: Contact linking to mail and careers page is unfinished.

<!-- [GitHub Pages]() -->

[Deployment Guide](https://docs.astro.build/en/guides/deploy/github/)

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── logo.webp
│   └── ...
├── src/
│   ├── assets
│   │   └── icons/..
│   │   └── *.jpg
│   │   └── ...
│   ├── components/
│   │   └── Card.astro
│   │   └── NavBar.astro
│   │   └── Footer.astro
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
│       └── about.astro
│       └── careers.astro
│       └── contact.astro
│       └── services.astro
└── package.json
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

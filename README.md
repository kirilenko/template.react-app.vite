# template.react-app.vite

[![Deploy](https://github.com/kirilenko/template.react-app.vite/actions/workflows/ci.yml/badge.svg)](https://github.com/kirilenko/template.react-app.vite/actions/workflows/ci.yml)

This is a template for a React app using Vite.  
It includes the following:

- [Emotion](https://emotion.sh/docs/introduction) with [Tailwind CSS](https://tailwindcss.com/docs)
- Deploy to [Firebase](https://firebase.google.com/) Hosting

### Requirements

- [Firebase Account](https://firebase.google.com/)
- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [PNPM](https://pnpm.io/)

---

# Firebase Hosting Setup

### Create Firebase CI-Token (for CI) via CLI

```bash
firebase login
```

Ensure that your `.firebaserc` links current project:

```bash
firebase projects:list
```

Create a token:

```
firebase login:ci
```

Store it to GitHub secrets as `FIREBASE_TOKEN`.

### Create Firebase Hosting

on https://console.firebase.google.com:

For this template: `project-name` is `template-react-app`, and default hosting is `template-react-app`.

But we can create multiple hosting for different branches:

- `<webAppName>` for `main` branch and (for this template it is `template-react-app-main`)
- `<webAppName>-stage` for `stage` branch (for this template it is `template-react-app-stage`)
- `<webAppName>-dev` for `dev` branch (for this template it is `template-react-app-dev`)

# IDE Setup

### TailWind's Config for WebStorm

```json
{
  "includeLanguages": {
    "ftl": "html",
    "jinja": "html",
    "jinja2": "html",
    "smarty": "html",
    "tmpl": "gohtml",
    "cshtml": "html",
    "vbhtml": "html",
    "razor": "html",
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "files": {
    "exclude": ["**/.git/**", "**/node_modules/**", "**/.hg/**", "**/.svn/**"]
  },
  "emmetCompletions": false,
  "classAttributes": ["class", "className", "ngClass", "tw"],
  "colorDecorators": false,
  "showPixelEquivalents": true,
  "rootFontSize": 16,
  "hovers": true,
  "suggestions": true,
  "codeActions": true,
  "validate": true,
  "lint": {
    "invalidScreen": "error",
    "invalidVariant": "error",
    "invalidTailwindDirective": "error",
    "invalidApply": "error",
    "invalidConfigPath": "error",
    "cssConflict": "warning",
    "recommendedVariantOrder": "warning"
  },
  "experimental": {
    "configFile": null,
    "classRegex": [
      "tw`([^`]*)",
      "tw=\"([^\"]*)",
      "tw={\"([^\"}]*)",
      "tw\\.\\w+`([^`]*)",
      "tw\\(.*?\\)`([^`]*)"
    ]
  }
}
```

# Scripts

### Project setup

```
pnpm setup
```

### Compiles and hot-reloads for development

```
pnpm dev
```

### Lints and fixes files

```
pnpm format
```

### Build

- `pnpm build:dev` - for `<webAppName>-dev` hosting.
- `pnpm build:stage` - for `<webAppName>-stage` hosting.
- `pnpm build:main` - for `<webAppName>` hosting.

### Preview local build

```
pnpm preview
```

### Build and deploy to Firebase w/o CI

- `deploy:firebase:dev` - for `<webAppName>-dev` hosting.
- `deploy:firebase:stage` - for `<webAppName>-stage` hosting.
- `deploy:firebase:main` - for `<webAppName>` hosting.

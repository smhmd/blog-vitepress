---
title: Set up Vue 3 linting in VSCode
summary: Setting up linting in a Vite app using Vue 3 and VScode.
---

Create a vue 3 app:

```bash
yarn create vite-app vue3-lint
npm init vite-app vue3-lint
code vue3-lint
```

First of All, disable Vetur's linting in `settings.json`, which will remove the squiggly lines, then, install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and enable Vue files linting:

```json
{
  "vetur.validation.template": false,
  "eslint.validate": ["javascript", "javascriptreact", "vue"]
}
```

Install ESLint and Vue's plugin as devDependencies:

```bash
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-vue@next
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-vue@next
```

Add a `.eslintrc.js` file as such (or run the command) to the project's root:

```js
// .eslintrc.js

module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'prettier/vue',
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
};
```

```bash
echo $'module.exports = {\n  extends: [\n    // add more generic rulesets here, such as:\n    // 'eslint:recommended',\n    "plugin:vue/vue3-recommended",\n    "prettier",\n    "prettier/vue",\n  ],\n  rules: {\n    // override/add rules settings here, such as:\n    // 'vue/no-unused-vars': 'error'\n  },\n};' > .eslintrc.js
```

And feel free to disable annoying or conflicting rules. Vue 3 ESLint plugin is still in alpha 😉.

# eslint-config

A eslint config for my typescript projects.

## Setup

### 1) Install

```bash
yarn add -D @davidborzek/eslint-config
```

### 2) Configure

You have to options to include the config in your projects.

1. Add the config to a `.eslintrc.js`

```js
module.exports = {
  extends: "@davidborzek",
  rules: {},
};
```

> You can also add additional rules.

2. Add it to the `package.json` of your project

```json
{
  "eslintConfig": {
    "extends": "@davidborzek"
  }
}
```

### 3) Linting scripts (optional)

For lint fix and check scripts you can add the following lines to your `package.json` scripts:

```json
{
  "scripts": {
    "lint": "eslint 'src/**/*.ts'",
    "lint-tests": "eslint 'test/**/*.ts'"
  }
}
```

module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": [
      "error",
      (module.exports = {
        trailingComma: "es5",
        semi: true,
        singleQuote: true,
        useTabs: true,
        printWidth: 80,
      }),
    ],
  },
};

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  plugins: ["react", "prettier", "unused-imports", "simple-import-sort"],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [],
  rules: {
    "prettier/prettier": "warn",
    "unused-imports/no-unused-imports": "warn",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
};

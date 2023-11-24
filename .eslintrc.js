module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    "react/display-name": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

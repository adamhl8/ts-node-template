module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
  },
  extends: [
    "airbnb-base-ts",
    "plugin:promise/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: {
    "no-console": "off"
  },
}

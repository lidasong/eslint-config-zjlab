module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
  },
  extends: [
    "eslint:recommended"
  ],
};

module.exports = {
  extends: [
    "next",
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "@tanstack/eslint-plugin-query", "import"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "no-console": [
      "error",
      {
        allow: ["error"],
      },
    ],
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "react/require-default-props": 0,
    "import/prefer-default-export": "off",
    "react/jsx-sort-props": 1,
    "@typescript-eslint/member-ordering": [
      1,
      {
        default: {
          memberTypes: ["signature", "method", "constructor", "field"],
          order: "alphabetically",
        },
      },
    ],
    "react/jsx-props-no-spreading": "off",
  },
  ignorePatterns: ["node_modules/", "dist/"],
};

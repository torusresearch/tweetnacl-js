import toruslabsJavascript from "@toruslabs/eslint-config-javascript";

export default [
  ...toruslabsJavascript,
  {
    rules: {
      "no-console": "off",
      "no-unused-vars": "off",
      "import/extensions": "off",
    },
  },
];

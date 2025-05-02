// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: [
      "dist/*",
      "node_modules/*",
      "ios/*",
      "android/*",
      "web-build/*",
      "web-build-ssr/*",
      "web-build-ssr-prod/*",
      "web-build-prod/*",
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "no-unused-vars": "off", // Turn off the base rule as it can report incorrect errors
    },
  },
]);

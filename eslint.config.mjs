import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    ignores: ["res/**/*", "coverage/**/*", "node_modules/**/*"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.mocha,
        browser: "readonly",
        $: "readonly",
        $$: "readonly",
        expect: "readonly",
        require: "readonly",
        module: "readonly",
        exports: "readonly",
      },
    },
    rules: {
      "class-methods-use-this": "off",
      "arrow-parens": "off",
      "prefer-arrow-callback": "off",
      "func-names": "off",
      "object-curly-newline": "off",
    },
  },
  pluginJs.configs.recommended,
];

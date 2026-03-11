import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
// Import json from "@eslint/json";
// Import css from "@eslint/css";
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['./dist/*', '**/node_modules/', 'webpack.config.js', 'postcss.config.js']),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.webextensions,
      },
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      'no-console': ['warn'],
      '@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true }],
    },
    // settings: {
    //   react: {
    //     version: '18',
    //   },
    // },
  },

  // { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  // { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
]);

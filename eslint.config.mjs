import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';


/** @type {import('eslint').Linter.Config[]} */
export default [
  daStyle,
  { languageOptions: { globals: globals.browser } },
  { env: {
    node: true,       // Tambahkan ini
    es2021: true       // Tambahkan ini jika belum ada
  } },
  pluginJs.configs.recommended,
];
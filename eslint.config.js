import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,
    ],
    exceptions: [
      {
        files: ['/graphql/generated.ts']
      },
    ],

    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,

      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // parser: parser,
      // parserOptions: {
      //   ecmaFeatures: { jsx: true },
      //   sourceType: 'module',
      //   project: ['./tsconfig.json'],
      // },

    },
    // rules: {
    //   "no-unused-vars": "warn",
    //   "no-undef": "warn",
    // },
  }

])

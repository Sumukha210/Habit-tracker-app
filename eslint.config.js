// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const unusedImports = require('eslint-plugin-unused-imports');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: [
      // Build outputs
      'dist/**',
      'node_modules/**',
      'ios/**',
      'android/**',
      'web-build/**',
      'web-build-ssr/**',
      'web-build-ssr-prod/**',
      'web-build-prod/**',

      // Expo
      '.expo/**',
      'expo-env.d.ts',

      // Native files
      '.kotlin/**',
      '*.orig.*',
      '*.jks',
      '*.p8',
      '*.p12',
      '*.key',
      '*.mobileprovision',

      // Metro
      '.metro-health-check*',

      // Debug files
      'npm-debug.*',
      'yarn-debug.*',
      'yarn-error.*',

      // macOS
      '.DS_Store',
      '*.pem',

      // Environment
      '.env*.local',

      // TypeScript
      '*.tsbuildinfo',

      // Other files/directories
      'app-example/**',
      'docs/**',
      'assets/**',
    ],
    plugins: {
      'unused-imports': unusedImports,
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
]);

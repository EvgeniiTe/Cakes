module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  "parser": "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "linebreak-style": ["error", "windows"],
    "import/prefer-default-export": 0,
    "react/prop-types": 0,
    "react/state-in-constructor": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "arrow-body-style": 0,
    "quotes": ["error", "double", {
      "allowTemplateLiterals": true
    }],
    "object-curly-newline": ["error", {
      "multiline": true
    }]
  },
};
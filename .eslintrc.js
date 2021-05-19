module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-self-closing': 0,
  },
};

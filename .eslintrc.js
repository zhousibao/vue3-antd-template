module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  //  0 = off, 1 = warn, 2 = error
  rules: {
    "vue/no-unused-components": "off",
    'vue/no-unused-vars': 'off',
    'vue/no-v-for-template-key-on-child': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    "@typescript-eslint/ban-ts-ignore": "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'no-plusplus': 0,
    'no-multiple-empty-lines': [2, { max: 2 }], // 空行最多不能超过2行
    eqeqeq: [2, 'allow-null'], // 使用 === 替代 ==
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    'comma-dangle': [2, 'always-multiline'],
    // 控制逗号前后的空格
    'comma-spacing': [2, { before: false, after: true }],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false,
      },
    ],
  },
}

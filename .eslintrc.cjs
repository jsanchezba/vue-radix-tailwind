module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:@intlify/vue-i18n/recommended',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'vue'],
    rules: {
        'prefer-promise-reject-errors': 'off',

        quotes: ['warn', 'single', { avoidEscape: true }],

        // this rule, if on, would require explicit return type on the `render` function
        '@typescript-eslint/explicit-function-return-type': 'off',

        // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',

        // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
        // does not work with type definitions
        'no-unused-vars': 'off',
        'vue/valid-attribute-name': 'error',

        // Vue-i18n rules reference => https://eslint-plugin-vue-i18n.intlify.dev/rules/
        '@intlify/vue-i18n/prefer-sfc-lang-attr': 'error',
        '@intlify/vue-i18n/no-missing-keys-in-other-locales': [
            'warn',
            {
                ignoreLocales: ['en-GB'],
            },
        ],
        '@intlify/vue-i18n/no-unknown-locale': 'error',
        '@intlify/vue-i18n/no-unused-keys': [
            'warn',
            {
                src: './src',
                extensions: ['.ts', '.vue', '.yaml'],
                ignores: [],
                enableFix: false,
            },
        ],
        '@intlify/vue-i18n/no-raw-text': [
            'warn',
            {
                attributes: {
                    '/.+/': ['title', 'label', 'placeholder', 'hint'],
                    input: ['placeholder'],
                    img: ['alt'],
                },
                ignoreNodes: ['q-icon'],
                ignorePattern: '^[-#:()&]+$',
                ignoreText: ['EUR', 'HKD', 'USD'],
            },
        ],

        // allow debugger during development only
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    settings: {
        'vue-i18n': {
            localeDir: [
                {
                    pattern: './src/core/i18n/locales/*.{yaml}',
                    localeKey: 'file',
                },
            ],
            messageSyntaxVersion: '^9.6.0',
        },
    },
}

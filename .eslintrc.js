module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    env: {
        browser: true,
    },
    plugins: [
        'babel',
        'react',
        '@typescript-eslint',
        'typescript-sort-keys',
        'prettier',
        'eslint-plugin-no-inline-styles',
    ],
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'prettier',
    ],
    rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unused-vars': 2,
        'brace-style': [2, '1tbs'],
        curly: [2, 'all'],
        'import/extensions': [
            2,
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/order': 0,
        'no-multiple-empty-lines': [
            2,
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 0,
            },
        ],
        'no-inline-styles/no-inline-styles': 2,
        'no-void': 0,
        'padding-line-between-statements': [
            2,
            {
                blankLine: 'always',
                prev: [
                    'case',
                    'multiline-block-like',
                    'multiline-const',
                    'multiline-expression',
                    'multiline-let',
                    'multiline-var',
                ],
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: [
                    'multiline-block-like',
                    'multiline-const',
                    'multiline-expression',
                    'multiline-let',
                    'multiline-var',
                    'return',
                ],
            },
        ],
        'prettier/prettier': 2,
        'react/jsx-curly-brace-presence': 0,
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.tsx'],
            },
        ],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-key': [
            2,
            {
                checkFragmentShorthand: true,
            },
        ],
        'react/jsx-no-literals': [
            2,
            {
                noStrings: false,
            },
        ],
        'react/jsx-sort-props': [
            2,
            {
                callbacksLast: false,
                ignoreCase: false,
                noSortAlphabetically: false,
                reservedFirst: false,
                shorthandFirst: false,
                shorthandLast: false,
            },
        ],
        'react/prop-types': 0,
        'react/require-default-props': [0, { forbidDefaultForRequired: true, ignoreFunctionalComponents: false }],
        'sort-imports': [
            2,
            {
                ignoreCase: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
        'sort-keys': [
            2,
            'asc',
            {
                caseSensitive: true,
                natural: false,
            },
        ],
        'typescript-sort-keys/interface': 2,
        'typescript-sort-keys/string-enum': 2,
    },
};

module.exports = {
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
        'plugin:prettier/recommended',
        'eslint-config-prettier'
    ],
    parser: 'babel-eslint',
    rules: {
        'react/prop-types': 0,
        'react/destructuring-assignment': 0,
        'import/no-named-as-default': 0,
        'react/prefer-stateless-function': 0,
        'react/sort-comp': 0,
        'consistent-return': 0,
        'no-plusplus': 0,
        'react/jsx-props-no-spreading': 0,
        'guard-for-in': 0,
        'no-restricted-syntax': 0,
        'no-async-promise-executor': 0,
        'react/no-unescaped-entities': 0,
        'react/no-string-refs': 0,
        'no-throw-literal': 0,
        'import/prefer-default-export': 0,
        'react/react-in-jsx-scope': 0,
        'no-undef': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-filename-extension': [
            1,
            {
                'extensions': ['.js', '.jsx']
            }
        ],
        'prettier/prettier': [
            'error',
            {
                'trailingComma': 'es5',
                'singleQuote': true,
                'printWidth': 100
            }
        ]
    },
    plugins: ['prettier']
}

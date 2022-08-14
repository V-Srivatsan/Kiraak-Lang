import { languages } from "monaco-editor"


const KiraakSyntax: languages.IMonarchLanguage = {
    symbols: /[\+\-\*\/\^\%]+/,

    keywords: [
        'hai', 'aur', 'ya', 'nai', 'toh', 'tak', 'ko',
        'boletoh', 'abse', 'banake', 'rakh',
        'agar', 'phir',
        'jab', 'tab', 'ab', 'har', 'baar', 'chodkar', 'chalate', 'hue',
        'function', 'lega', 'dega', 'deke', 'chala',
        'screen', 'pe', 'dikha',
        'me', 'input', 'number', 'string', 'aayega',
        'cutle', 'chalde', 'khatam'
    ],

    typeKeywords: [
        'sahi', 'galat', 'khaali'
    ],

    operators: [
        '+', '-', '*', '/', '^', '%', '//', 'se', 'jitta', 'ke', 'baraabar', 'chota', 'bada',
    ],



    tokenizer: {
        root: [
            // whitespace
            { include: '@whitespace' },

            [/[a-z_$][\w$]*/, {
                cases: {
                    '@keywords': 'keyword',
                    '@operators': 'operator',
                    '@typeKeywords': 'typeKeyword',
                    '@default': 'identifier'
                }
            }],

            [/@symbols/, {
                cases: {
                    '@operators': 'operator',
                    '@default': ''
                }
            }],

            [/\d+/, 'number'],
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number'],

            [/"/, { token: 'string', bracket: '@open', next: '@string' }],
            [/'.*[^\\']'/, 'string'],
        ],

        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/==>/, 'comment', '@comment'],
            [/=>.*$/, 'comment'],
        ],

        string: [
            [/[^\\"]+/,  'string'],
            [/"/, { token: 'string', bracket: '@close', next: '@pop' } ],
        ],

        comment: [
            [/[^<=]+/, 'comment'],
            [/==>/, 'comment', '@push'],    // nested comment
            ["<==", 'comment', '@pop'],
            [/[=>]/, 'comment']
        ],
    }
}

export default KiraakSyntax
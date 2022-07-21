import { languages } from "monaco-editor"


const KiraakSyntax: languages.IMonarchLanguage = {
    symbols: /[\+\-\*\/\^\%]+/,

    keywords: [
        'banake', 'rakh',
        'hai',
        'boletho',
        'ke', 'baraabar',
        'se', 'jitta',
        'chota', 'bada',
        'ya', 'aur', 'nahi',
        'agar', 'phir', 'tho',
        'jabtak', 'tab',
        'ko', 'tak', 'har', 'baar', 'chodkar', 'chalate', 'hue',
    ],

    typeKeywords: [
        'sahi', 'galat'
    ],

    operators: [
        '+', '-', '*', '/', '^', '%', '//', 'se', 'bada', 'chota'
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
        ],

        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/==>/, 'comment', '@comment'],
            [/=>.*$/, 'comment'],
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
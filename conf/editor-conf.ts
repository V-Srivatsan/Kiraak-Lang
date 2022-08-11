import { Monaco } from "@monaco-editor/react"

import KiraakSyntax from "./syntax";
import KiraakTheme from './theme'


const starterCode = `
n me input aayega
sum boletoh 0

ab i ko 1 se n tak chalate hue {
    num me input aayega
    sum boletoh sum + num
}

screen pe sum dikha
`


const setup = (monaco: Monaco, editorId: string, run: Function) => {
    monaco.editor.defineTheme('Kiraak', KiraakTheme)

    monaco.languages.register({ id: 'Kiraak' });
    monaco.languages.setMonarchTokensProvider('Kiraak', KiraakSyntax)

    monaco.languages.setLanguageConfiguration('Kiraak', {
        comments: {
            lineComment: "=>",
            blockComment: ["==>", "<=="]
        },

        surroundingPairs: [
            { open: '{', close: '}' },
            { open: '(', close: ')' },
            { open: "'", close: "'" },
            { open: '"', close: '"' },
        ],

        autoClosingPairs: [
            { open: '{', close: '}' },
            { open: '(', close: ')' },
            { open: "'", close: "'", notIn: ['string'] },
            { open: '"', close: '"', notIn: ['string'] },
        ],

        onEnterRules: [
            {
                beforeText: RegExp('{'),
                afterText: RegExp('}'),
                action: {
                    indentAction: 3,
                }
            }
        ]
    })


    const editor = monaco.editor.create(document.getElementById(editorId)!!, {
        language: 'Kiraak',
        theme: 'Kiraak',
        scrollBeyondLastLine: true,
        automaticLayout: true,
        cursorSmoothCaretAnimation: true,
        cursorBlinking: 'expand',
        fontLigatures: true,
        fontFamily: 'Fira Code',
        fontSize: 16,
        padding: { top: 10 },
        value: starterCode,
        autoIndent: 'brackets',
        bracketPairColorization: { enabled: true },
    })

    editor.addCommand(
        monaco.KeyCode.F9,
        () => {
            run(editor.getValue())
        }
    )
}

export default setup
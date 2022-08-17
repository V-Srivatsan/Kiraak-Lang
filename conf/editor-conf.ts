import { Monaco } from "@monaco-editor/react"

import KiraakSyntax from "./syntax";
import KiraakTheme from './theme'


const starterCode = `
==> 
addArr function gives the sum of an array.
mulArr function gives the product of an array.
<==

addArr function boletoh arr lega aur {
    sum boletoh 0
    ab i ko 1 se arr ka size tak chalate hue {
        abse sum boletoh sum + arr ka i
    }

    sum dega
}

mulArr function boletoh arr lega aur {
    prod boletoh 1
    ab i ko 1 se arr ka size tak chalate hue {
        abse prod boletoh prod * arr ka i
    }

    prod dega
}


_size me input aata
arr boletoh collection
jab tak _size 0 se bada hai tab tak {
    abse _size boletoh _size - 1

    elem me input aata
    arr me elem daal
}


sum boletoh addArr ko arr deke chala
prod boletoh mulArr ko arr deke chala



screen pe 'Sum: ' + sum dikha
screen pe '\\n' dikha
screen pe 'Prod: ' + prod dikha
`


const setup = (monaco: Monaco, editorId: string, run: Function, init: Function) => {
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

    monaco.editor.onDidCreateEditor(() => init())


    const editor = monaco.editor.create(document.getElementById(editorId)!!, {
        language: 'Kiraak',
        theme: 'Kiraak',
        scrollBeyondLastLine: true,
        automaticLayout: true,
        cursorSmoothCaretAnimation: true,
        cursorBlinking: 'expand',
        fontLigatures: true,
        // fontFamily: 'Fira Code',
        fontSize: 16,
        padding: { top: 10 },
        value: starterCode,
        autoIndent: 'brackets',
        bracketPairColorization: { enabled: true },
    })

    editor.addCommand(
        monaco.KeyCode.F9,
        () => run(editor.getValue())
    )
}

export default setup
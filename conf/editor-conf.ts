import { Monaco } from "@monaco-editor/react"

import KiraakSyntax from "./syntax";
import KiraakTheme from './theme'


const starterCode = `
x boletho 10
y banake rakh

agar x 10 ^ 2 jitta hai tho abse x boletho 20 nahi tho abse y boletho 10

z boletho 10.254


`


const setup = (monaco: Monaco, editorId: string) => {
    monaco.editor.defineTheme('Kiraak', KiraakTheme)

    monaco.languages.register({ id: 'Kiraak' });
    monaco.languages.setMonarchTokensProvider('Kiraak', KiraakSyntax)

    monaco.languages.setLanguageConfiguration('Kiraak', {
        comments: {
            lineComment: "=>",
            blockComment: ["==>", "<=="]
        }
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
        padding: { top: 5},
        value: starterCode,
    })

    editor.addCommand(
        monaco.KeyCode.F9,
        () => { console.log(editor.getValue()) }
    )
}

export default setup
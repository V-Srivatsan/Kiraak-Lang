import { editor } from "monaco-editor";


const KiraakTheme: editor.IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,

    rules: [
        { token: 'comment', foreground: '7f7f7f', fontStyle: 'italic' },

        { token: 'identifier', foreground: '79c7c5' },
        { token: 'typeKeyword', foreground: 'ecdb87' },
        { token: 'keyword', foreground: 'ec87cb', fontStyle: 'italic' },
        
        { token: 'operator', foreground: 'e26d4f' },

        { token: 'number', foreground: 'ffb056' },

        { token: 'string', foreground: 'c3e56f' }
    ],

    colors: {
        'editor.background': '#1c2332',
        'editor.lineHighlightBackground': '#171d2b',
        'editorCursor.foreground': '#ffb056',
    }
}

export default KiraakTheme
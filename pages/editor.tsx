import { useMonaco } from "@monaco-editor/react"
import { useEffect, useState, useRef } from 'react'
import Head from "next/head"
import Split from 'react-split'

import { Autorenew, PlayArrow } from "@mui/icons-material"

import setup from "../conf/editor-conf"
import styles from '../styles/Editor.module.scss'

const Editor = () => {

    const monaco = useMonaco()
    const ref = useRef(null)

    const runCode = ((code: string) => {
        const inp = document.getElementById(styles.input)
        const output = document.getElementById(styles.output)
        const btn = document.getElementById(styles.run)

        const req: {[k: string]: string} = {}
        req['code'] = code

        const input = (inp != null && inp.innerText.length > 0 ? inp.innerText : null)
        if (input != null)
            req['input'] = input
        
        
        if (req.code.length === 0) return;
        
        btn?.classList.add(styles.running)

        fetch('https://api.kiraak.ml/?' + new URLSearchParams(req))
            .then(data => data.json())
            .then(res => {
                if (output != null) {
                    if (res.stderr.length > 0) {
                        output.classList.add(styles.error)
                        output.innerText = res.stderr
                    }
            
                    else {
                        output.classList.remove(styles.error)
                        output.innerText = res.stdout
                    }
                }

                btn?.classList.remove(styles.running)
            })
            .catch (e => {
                console.log(e)
                alert('Oops! Something went wrong! Please try again later!')
                btn?.classList.remove(styles.running)
            })

    })

    useEffect(() => {
        if (monaco) {
            setup(monaco, styles.editor, runCode)
        }
    }, [monaco])

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)

        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        })

        import("@lottiefiles/lottie-player")
    }, [])

    return (
        <>
            <Head><title>Playground | Kiraak</title></Head>

            <Split
                className={styles.split}
                minSize={[0.4 * width, 0.3 * width]}
                sizes={[60, 40]} id={styles.container}>
                <div>
                    <div className={styles.tab}>Code Editor</div>
                    <div className={styles.tab} id={styles.run} onClick={() => {
                        const code = monaco?.editor.getModels()[0].getValue()
                        if (code === undefined)
                            runCode('')
                        else
                            runCode(code)
                    }}>
                        <PlayArrow />
                        <Autorenew />

                        &nbsp; Run (F9)
                    </div>
                    <div id={styles.editor}></div>
                </div>
                <div>
                    <Split
                        style={{ height: '100%' }}
                        direction="vertical" minSize={[0.1 * height, 0.5 * height]}
                        sizes={[50, 50]} className={styles.split}>
                        <div>
                            <div className={styles.tab}>Input</div>
                            <div contentEditable id={styles.input}>
                                5
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.tab}>Output</div>
                            <pre id={styles.output} className={styles.error}></pre>
                        </div>
                    </Split>
                </div>
            </Split>

            <div id={styles.unsupported}>
                <lottie-player ref={ref}
                    autoplay mode="normal" src="/unsupported.json"
                    style={{ width: "300px", height: "300px" }} />
                
                <div>Uh oh! It looks like your screen is too small to load the playground!</div>
            </div>
        </>
    )
}

export default Editor

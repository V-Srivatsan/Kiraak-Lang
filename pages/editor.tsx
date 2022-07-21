import { useMonaco } from "@monaco-editor/react"
import { useEffect, useState, useRef } from 'react'
import Head from "next/head"
import Split from 'react-split'

import setup from "../conf/editor-conf"
import styles from '../styles/Editor.module.scss'

const Editor = () => {

    const monaco = useMonaco()
    const ref = useRef(null)

    useEffect(() => {
        if (monaco) {
            setup(monaco, styles.editor)
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
                    <div className={styles.tab} id={styles.run}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 96 112" fill="none">
                            <path d="M-3.8147e-06 0.574387L96 56L-2.09167e-06 111.426L-3.8147e-06 0.574387Z" fill="#D9D9D9"/>
                        </svg>

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
                            <div contentEditable id={styles.input}></div>
                        </div>
                        <div>
                            <div className={styles.tab}>Output</div>
                            <div id={styles.output}></div>
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
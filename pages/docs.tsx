import { Dispatch, SetStateAction, useState, useEffect } from "react"
import Head from "next/head"

import { ChevronRight } from "@mui/icons-material"

import styles from '../styles/Docs.module.scss'


type DocProps = {
    title: string,
    children: JSX.Element[],
    set: Dispatch<SetStateAction<JSX.Element[]>>,
    selected?: boolean,
}

const DocSection = (props: DocProps) => {

    useEffect(() => {
        if (props.selected)
            props.set(props.children)
    }, [])

    return (
        <>
            <div className={styles.section + (props.selected ? ' ' + styles.active : '')}
                onClick={event => {
                    props.set(props.children)
                    document.querySelector(`.${styles.section}.${styles.active}`)?.classList.remove(styles.active)
                    event.currentTarget.classList.add(styles.active)
                }}>
                
                <ChevronRight />
                <div>{props.title}</div>
            </div>
        </>
    )
}


const Docs = () => {
    const [doc, setDoc] = useState([<></>])

    return (
        <>
            <Head><title>Docs | Kiraak</title></Head>

            <div id={styles.container}>
                <div>

                    <DocSection title='Hello world!' set={setDoc}>
                        <h1>Hello world</h1>
                        <p>lorem500</p>
                    </DocSection>

                    <DocSection selected={true} title='Hello world!' set={setDoc}>
                        <h1>Hello world</h1>
                        <p>lorem5000</p>
                    </DocSection>

                </div>
                <div>{doc}</div>
            </div>
        </>
    )
}

export default Docs
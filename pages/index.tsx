import { Code, GitHub, Topic } from '@mui/icons-material'
import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'

const Home = () => {
	return (
		<>
			<Head><title>Kiraak</title></Head>

			<h1 id={styles.heading}>Kiraak</h1>
			<div id={styles.caption}>Miya bhai bolthey aandoh!</div>

			<div id={styles.actions}>
				<Link href='/editor'>
					<a><Code /> &nbsp; Playground</a>
				</Link>

				<a href='https://docs.kiraak.ml/' target="_blank" rel='noreferrer'>
					<Topic /> &nbsp; Read the Docs
				</a>
			</div>
		</>
	)
}

export default Home
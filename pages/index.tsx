import { Code, GitHub } from '@mui/icons-material'
import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'

const Home = () => {
	return (
		<>
			<Head><title>Kiraak</title></Head>

			<h1 id={styles.heading}>Kiraak</h1>
			<div id={styles.caption}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>

			<div id={styles.actions}>
				<Link href='/editor'>
					<a><Code /> &nbsp; Playground</a>
				</Link>

				<a href="https://github.com/V-Vishwanath" target="_blank" rel='noreferrer'>
					<GitHub /> &nbsp; View Source
				</a>
			</div>
		</>
	)
}

export default Home
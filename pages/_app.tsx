import type { AppProps } from 'next/app'
import Head from 'next/head'

import Nav from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }: AppProps) {

	return (
		<>
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			<Nav />
			<main>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	)
}

export default MyApp
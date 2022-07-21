import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Home, Code, Topic } from '@mui/icons-material'

import styles from '../styles/Navbar.module.scss'


type NavProps = {
    url: string,
    link: string,
    text: string,
    icon: JSX.Element
}

const NavLink = ({ url, link, text, icon }: NavProps) => {
    return (
        <div className={styles.link + (link == url ? ` ${styles.active}` : '' )}>
            <Link href={link}>
                <a>{icon} &nbsp; {text}</a>
            </Link>
        </div>
    )
}

const Nav = () => {

    const router = useRouter()
    const [url, setUrl] = useState(router.pathname)

    useEffect(() => {
        router.events.on('routeChangeComplete', (newUrl) => {
            setUrl(newUrl)
        })
    }, [])
    
    return (
        <>
            <nav id={styles.nav}>
				
                <Link href='/'>
                    <a id={styles.logo}>Kiraak</a>
                </Link>

                <div>
                    <NavLink url={url} icon={<Home />} link='/' text='Home' />
                    <NavLink url={url} icon={<Code />} link='/editor' text='Playground' />
                    <NavLink url={url} icon={<Topic />} link='/docs' text='Docs' />
                </div>

            </nav>

            <nav id={styles.bottom}>
                <Link href='/'>
                    <a className={ url == '/' ? styles.active : '' }><Home /> &nbsp; Home</a>
                </Link>
                <Link href='/docs'>
                    <a className={ url == '/docs' ? styles.active : '' }><Topic /> &nbsp; Docs</a>
                </Link>
            </nav>
        </>
    )
}

export default Nav
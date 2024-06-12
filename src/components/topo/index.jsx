import Image from "next/image";
import Link from "next/link";

import Logo from '/public/logo.png'

import styles from './topo.module.scss'

export default function Topo () {
    return (
        <header className={styles.topo}>
            <div className={`limited_width ${styles['limited_width']}`}>
                <Image src={Logo}/>

                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/sabores">Sabores</Link>
                    <Link href="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}
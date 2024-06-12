import styles from './sabores.module.scss'

import Image from 'next/image'

import Oreo from '/public/sabor-oreo.png'
import Pistache from '/public/sabor-pistache.png'
import Cookies from '/public/sabor-cookies-avela.png'
import Kiwi from '/public/sorbet-kiwi.png'
import Morango from '/public/sorbet-morango.png'
import Limao from '/public/sorbet-limao.png'

export default function Sabores () {
    return (
        <main className={styles.sabores_main_container}>
            <section className={styles.capa}>
                <h1>NOSSOS SABORES</h1>
            </section>
            
                <section className={styles.infos_container}>
                    <h2>SABORES DE SORVETE</h2>

                    <div className={styles.cards_container}>
                        <div className={styles.card_sabor}>
                            <Image src={Oreo}/>
                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>

                        <div className={styles.card_sabor}>
                            <Image src={Pistache}/>
                            <h3>Sorvete de Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>

                        <div className={styles.card_sabor}>
                            <Image src={Cookies}/>
                            <h3>Sorvete Cookies & Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor</p>
                        </div>

                        <div className={styles.card_sabor}>
                            <Image src={Kiwi}/>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor Kiwi. Rico em vitamina C.</p>
                        </div>

                        <div className={styles.card_sabor}>
                            <Image src={Morango}/>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>

                        <div className={styles.card_sabor}>
                            <Image src={Limao}/>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </section>
        </main>
    )
}
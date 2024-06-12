import Image from "next/image";

import Logo from '/public/logo.png'

import styles from './rodape.module.scss'

export default function Rodape () {
    return (
        <footer className={styles.rodape}>
                <div className={`limited_width ${styles['limited_width']}`}>
                    <Image src={Logo}/>

                    <aside>
                        <h3>ENDEREÇO</h3>
                        <p>Av. Bernardino de Campos, 98</p>
                        <p>São Paulo, SP, 12345-678</p>
                    </aside>
        
                    <aside>
                        <h3>CONTATO</h3>
                        <p>info@meusite.com</p>
                        <p>tel(11)3456-7890</p>
                    </aside>

                    <aside>
                        <h3>HORÁRIOS</h3>
                        <p>ABERTO TODOS OS DIAS</p>
                        <p>10:00 - 20:00</p>
                    </aside>
                </div>

                <p className={styles.direito_autoral}>Gelateria. Orgulhosamente desenvolvido por Luiz Dener</p>
        </footer>
    )
}
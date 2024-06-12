import styles from "./page.module.scss";

import Image from "next/image";

import Imagem1 from '/public/banner-sabores.jpg'
import Imagem2 from '/public/eventos-image.jpg'
import Imagem3 from '/public/sobre-image.jpg'

export default function Home() {
  return (
    <main className={styles.main_home_container}>

        <section className={styles.capa}>
          <h1>SORVETE ARTESANAL</h1>
        </section>

      <section className={styles.infos_container}>
          <section>
            <Image src={Imagem1}/>
            <aside>
              <h2>NOSSOS PRODUTOS</h2>
              <span>Novos e deliciosos!</span>
              <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açucar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
            </aside>
          </section>

          <section className={styles.secao_intermediaria}>
            <Image src={Imagem2}/>
            <aside>
              <h2>NOSSOS EVENTOS</h2>
              <span>Delicias com sorvete!</span>
              <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
              </p>
            </aside>
          </section>

          <section>
            <Image src={Imagem3}/>
            <aside>
              <h2>SOBRE NÓS</h2>
              <span>Alegria em cada casquinha!</span>
              <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
            </aside>
          </section>
      </section>
    </main>
  );
}

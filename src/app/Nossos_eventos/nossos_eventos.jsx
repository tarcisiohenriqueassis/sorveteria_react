import Image from "next/image";

import Estilo from "@/app/Nossos_eventos/nossos_eventos.module.css";

import BannerSabores from "@/../public/assets/banner-sabores.jpg";
import Eventos from "@/../public/assets/eventos-image.jpg";
import Confraternização from "@/../public/assets/sobre-image.jpg";

export default function SobreNos(){
    return(
<main>
    <section className={Estilo.container_global}>
      
        <article className={Estilo.container_nossos_sabores}>
               <Image className={Estilo.Image} src={BannerSabores} alt="Sabores"/>
            <div className={Estilo.container_texto}>
            <h2>Nossos Sabores</h2>
            <span>Novos e deliciosos!</span>
            <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
            </div>
        </article>

        <article className={Estilo.container_nossos_eventos}>
        <Image className={Estilo.Image} src={Eventos} alt="Eventos" />

            <div className={Estilo.container_texto}>
                <h2>Nossos eventos</h2>
                <span>Delicias com sorvete!</span>
                <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
            </div>  
        </article>

        <article className={Estilo.container_sobre_nos}>
               <Image className={Estilo.Image}  src={Confraternização} alt="Confraternização"/>
             <div className={Estilo.container_texto}>
                <h2>Sobre Nós</h2>
                <span>Alegria em cada casquinha!</span>
                <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
            </div>
        </article>
    </section>
</main>    
)
}


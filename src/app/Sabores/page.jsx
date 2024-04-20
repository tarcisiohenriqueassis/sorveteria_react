import Image from"next/image";
//importando header e footer
import Header from "../Componentes/Header/header";
import Footer from"@/app/Componentes/Roda_pe/footer";

//importando imagens
import BannerSorveteTopo from "@/../public/assets/banner-sabores.jpg";
import Sorvete_limao from"@/../public/assets/sorbet-limao.png";
import Sorvete_oreo from"@/../public/assets/sabor-oreo.png";
import Sorvete_kiwi from"@/../public/assets/sorbet-kiwi.png";
import Sorvete_morango from"@/../public/assets/sorbet-morango.png";
import Sorvete_pistache from"@/../public/assets/sabor-pistache.png";
import Sorvete_cookies from"@/../public/assets/sabor-cookies-avela.png";


import Estilo from"@/app/Sabores/sabores.module.css";


export default function Sabores(){
    return(
        <main>
            <Header/>
            <section className={Estilo.Container_Bolas_Sorvete_Topo}>
                <h1 className={Estilo.titulo}>Nossos Sabores</h1>
               <Image className={Estilo.imagem_bolas_de_sorvete} src={BannerSorveteTopo}/>
            </section>

            <section className={Estilo.container_global_cards}>
                < div className={Estilo.container_cards}>
                    <article className={Estilo.cards}>
                        <Image id={Estilo.imagem_zoom} className={Estilo.imagem_sabores_cards} src={Sorvete_limao} width={300}/>
                        <div className={Estilo.container_texto_card}>
                            <h2>Sorvete de Limão Siciliano</h2>
                            <p>sorvete gourmet de limão siciliano </p>
                            <p>Vai te encantar</p>
                        </div>
                    </article>
                    <article className={Estilo.cards}>
                        <Image className={Estilo.imagem_sabores_cards} src={Sorvete_oreo}/>
                        <div className={Estilo.container_texto_card}>
                            <h2>Sorvete de Oreo</h2>
                            <p>Delicioso sorvete sabor Oreo</p>
                            <p>Uma explosão de sabor</p>
                        </div>
                    </article>
                    <article className={Estilo.cards}>
                        <Image className={Estilo.imagem_sabores_cards} src={Sorvete_cookies}/>
                        <div className={Estilo.container_texto_card}>
                            <h2>Sorvete Cookies & Avelã</h2>
                            <p>O nosso melhor sorvete</p>
                            <p> Você vai adorar o sabor</p>
                        </div>
                    </article>
                    <article className={Estilo.cards}>
                        <Image id={Estilo.imagem_zoom} className={Estilo.imagem_sabores_cards} src={Sorvete_kiwi}/>
                        <div className={Estilo.container_texto_card}>
                            <h2>Sorvete de Kiwi</h2>
                            <p>Delicioso e refrescante </p>
                            <p> Rico em vitamina C</p>
                        </div>
                    </article>
                    <article className={Estilo.cards}>
                            <Image className={Estilo.imagem_sabores_cards} src={Sorvete_morango} width={200} height={200}/>
                        <div className={Estilo.container_texto_card}>
                            <h2>Sorvete de Morango</h2>
                            <p>Sorvete de morango gourmet</p>
                            <p> Tradicional e saboroso</p>
                        </div>
                    </article>
                    <article className={Estilo.cards}>
                        <Image id={Estilo.imagem_zoom} className={Estilo.imagem_sabores_cards} src={Sorvete_pistache}/>
                        <div className={Estilo.container_texto_card}>
                            <h2>Sorvete Pistache</h2>
                            <p>Sorvete sabor pistache </p>
                            <p>Com pedacinhos de semente</p>
                        </div>
                    </article>
                </div>
            </section>
            <Footer/>
        </main>
        
        
    )
}

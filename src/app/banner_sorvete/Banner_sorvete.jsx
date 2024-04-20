import Image from "next/image";

//importanto CSS
import Estilo from "@/app/banner_sorvete/Banner.module.css";

//importando imagens
import Bannersorvete from "@/../public/assets/banner-home.png";


export default function BannerSorvete (){
    return(
        <section className={Estilo.container_global} >
            <div className={Estilo.container_imagem_sorvete}>
                <Image className={Estilo.imagem_sorvete} src={Bannersorvete} alt="Banner Sorvete"/>
                <h2 className={Estilo.texto_banner_sorvete}>Sorvete Artesanal</h2>
            </div>
        </section>
    )
}
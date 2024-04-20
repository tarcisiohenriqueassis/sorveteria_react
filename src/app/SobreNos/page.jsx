//importando função nativa
import Image from 'next/image';

//CSS
import Estilo from '@/app/SobreNos/sobre_nos.module.css';

//importando componentes
import Header from '../Componentes/Header/header';
import BannerSobre from '@/../public/assets/banner-sobre.png';
import Rodape from '../Componentes/Roda_pe/footer';
//importando arquivos
import LojaSorvete from '@/../public/assets/sorveteria.jpg';
import Confraternizacao from '@/../public/assets/sobre-image.jpg';

export default function SobreNos(){
    return(
       
        <div className={Estilo.container_global}>
             <Header/>
            <section className={Estilo.container_imagem_sabores_topo}>
                <Image className={Estilo.imagem_sabores_topo} src={BannerSobre} alt='Sorvete Sabores '/>
                <h2>A gelateria</h2>
            </section>
            <section className={Estilo.container_texto_sobre_nos}>
                <h3>Sobre Nós</h3>
                <span>Nós simplesmente amamos sorvete!</span>
                <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
            </section>
            <section className={Estilo.container_imagens_confraternizacao}>
                <div className={Estilo.container_imagem}>
                    <Image className={Estilo.Image} src={Confraternizacao}  width={300} height={250} alt='Confraternização'/>
                    <Image className={Estilo.Image} src={LojaSorvete}  width={300} height={250}  alt='Loja Gelateria'/>
                </div>
            </section>
            <Rodape/>
        </div>
    )
}
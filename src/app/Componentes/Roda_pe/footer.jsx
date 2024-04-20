import Image from 'next/image';
import Link from 'next/link';

//importando estilo CSS
import Estilo from '@/app/Componentes/Roda_pe/footer.module.css';

//importando imagens 
import BotaoTopo from'@/../public/assets/seta-voltar-topo.png';
import LogoSorveteria from "@/../public/assets/logo.png"

export default function Rodape(){
    return(
        <footer>
            <section className={Estilo.container_global_footer}>

                <section className={Estilo.container_informacoes} >
                    
                    <div>
                        <Image src={LogoSorveteria} alt='Logo Gelateria' width={120} height={110}/>
                    </div>

                        <div className={Estilo.container_contatos_endereco_horario}> 

                            <section className={Estilo.container_endereco}>
                                <h3>Endereço</h3>
                                <Link className={Estilo.links} href="https://www.google.com/maps/place/Av.+Bernardino+de+Campos,+98+-+Para%C3%ADso,+S%C3%A3o+Paulo+-+SP,+04004-040/@-23.5722542,-46.6433916,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5997af8f3edd:0xd1b700d79e670415!8m2!3d-23.5722542!4d-46.6433916!16s%2Fg%2F11csn819wv?entry=ttu" target='blank'>Av. Bernandinho de campos, 98  São Paulo, SP 12345-789</Link>
                            </section>
        
                            <section className={Estilo.container_contatos}>
                                <h3>Contato</h3>
                                <Link className={Estilo.links} href="tel:+5533958754121" target='blank'>Tel: (33) 958754121</Link>
                                <Link className={Estilo.links} href="mailto:@Gelateria" target='blank'>@Gelateria</Link>
                            </section>
        
                            <section className={Estilo.container_horario_funcionamento}>
                                <h3>Horario</h3>
                                <p>Aberto todos os dias de <span>10:00</span> as <span>22:00</span></p>
                            </section>

                        </div>

                </section>

                <section className={Estilo.container_texto_final}>
                         <p>Gelateria. <br/> Orgulhosamente desenvolvido por <Link className={Estilo.links} href="www.linkedin.com/in/
                    tarcisio-henrique-0376b81a0" target='blank'> Tarcisio H</Link></p>
                  
                    <div className={Estilo.container_seta_topo}>
                        <Link href="/"><Image src={BotaoTopo} width={70} height={70} alt='Botão voltar ao topo' /></Link>
                    </div>

                </section>

            </section>
        </footer>
    )
}; 
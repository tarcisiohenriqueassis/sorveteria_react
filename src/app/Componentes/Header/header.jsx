import Image from "next/image";
import Link from "next/link";

import Estilo from "@/app/Componentes/Header/header.module.css";

import LogoSorveteria from"@/../public/assets/logo.png";

export default function Header(){ 
    return( 
<header className={Estilo.container_global}>
<div className={Estilo.container_imagem}>
    <Image className={Estilo.Image} src={LogoSorveteria}/>
</div>
< nav className={Estilo.container_links}>
 <Link className={Estilo.link} href="/">Home</Link>
 <Link className={Estilo.link} href="/Sabores"> Sabores</Link>
 <Link className={Estilo.link} href="/SobreNos">Sobre</Link>
</nav>
</header>
)}
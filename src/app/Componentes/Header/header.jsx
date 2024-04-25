"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Estilo from "@/app/Componentes/Header/header.module.css";

import BotaoMenu from"@/../public/assets/menuicon.webp";
import LogoSorveteria from"@/../public/assets/logo.png";


export default function Header(){ 
    
    const [menuFechado, setMenuAberto] = useState('nav_menu_lateral_fechado');

    const box_menu = menuFechado === 'nav_menu_lateral_fechado' ?Estilo['nav_menu_lateral_fechado'] :Estilo['nav_menu_lateral_aberto'];
   
    function alterarEstilo(){  
      if( menuFechado === 'nav_menu_lateral_fechado'){
          setMenuAberto('nav_menu_lateral');
      }
      else{
          setMenuAberto('nav_menu_lateral_fechado')
      }
  } ;
    return( 
<header>
<section  className={Estilo.container_global}>
    <div className={Estilo.container_imagem}>
        <Image className={Estilo.Image} src={LogoSorveteria}/>
    </div>
    < nav className={Estilo.container_links}>
     <Link className={Estilo.link} href="/">Home</Link>
     <Link className={Estilo.link} href="/Sabores"> Sabores</Link>
     <Link className={Estilo.link} href="/SobreNos">Sobre</Link>
    </nav>
    <aside className={Estilo.container_global_menu_lateral}>
        <div className={Estilo.container_btn_lateral}>
        <button onClick={alterarEstilo} className={Estilo.btn_menu}><Image src={BotaoMenu} width={48} height={45}/></button>
       
        <div className={box_menu}>
            <nav >
            <Link className={Estilo.link_menu_lateral} href="/">Home</Link>
            <Link className={Estilo.link_menu_lateral} href="/Sabores"> Sabores</Link>
            <Link className={Estilo.link_menu_lateral} href="/SobreNos">Sobre</Link>
            </nav>
        </div>
        </div>
    </aside>
</section>

</header>
)}
"use client"; // top to the file

import Image from "next/image";
import React, { useRef } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import WindowComponent from './components/WindowComponent';
import WindowComponentClose from './components/WindowComponentClose';
import { Button } from 'react95';

// pick a theme of your choice
import original from './assets/themes/white';
import AppBarComponent from './components/AppBarComponent';
import { JavaOriginal, JavascriptOriginal, ReactOriginal, BashOriginal, CplusplusOriginal } from 'devicons-react';
import './components/styles/perfil.css'; // Ruta correcta hacia tu archivo CSS
import fgifView from './images/fgif-view.gif';

export default function Home() {
  const btnClepnid = useRef(null);
  const btnFgif = useRef(null);

  const llamarMetodoVisibilidadClepnid = () => {
    if (btnClepnid.current) {
      btnClepnid.current.handleOpenClick();
    }
  };

  const llamarMetodoVisibilidadFgif = () => {
    if (btnFgif.current) {
      btnFgif.current.handleOpenClick();
    }
  };

  return (
    <div>
      <ThemeProvider theme={original}>
        <div>
          <WindowComponentClose ref={btnClepnid} title="Clepnid" initialX={150} initialY={150} contenido={
            <div className="presentation-container">
            <a href="https://clepnid.github.io/">Ir al sitio.</a>
              <p className="type-modulo">Aplicación Escritorio Windows, Linux, MacOs</p>
              <p className="name">Cliente/Servidor dinámico trabajando en dos modos a la vez: </p>
              <p className="type-modulo">Local</p>
              <p className="description">Con solo presionar algunas teclas, nuestra aplicación permite simular las acciones de copiar y pegar del portapapeles, facilitando así el intercambio de archivos, imágenes y texto entre dispositivos conectados a la misma red.<JavaOriginal className="dev-image" /></p>
              <p className="type-modulo">Web</p>
              <p className="description">Nuestra plataforma ofrece acceso web a los diversos elementos compartidos en red, centrándose en la interacción a través de páginas web modulares para archivos, que permiten reproducir, editar, descargar, y más. <JavascriptOriginal className="dev-image" />    <ReactOriginal className="dev-image" />Además, integra un sistema de backend espejo para redirigir a otros servicios web en diferentes puertos. <BashOriginal className="dev-image" /></p>
            </div>
          } />
          <WindowComponentClose ref={btnFgif} title="Fgif" initialX={150} initialY={150} contenido={
            <div className="presentation-container">
              <Image style={{ width: '100%', height: 'auto' }} src={fgifView} />
              <a href="https://clepnid.github.io/fgif/">Ir al sitio.</a>
              <p className="type-modulo">Aplicación Escritorio Windows</p>
              <p className="name">Abre imagenes animadas con extensión .gif y disfruta viendo como se mueve.</p>
              <p className="description">Se ha desarrollado una aplicación de escritorio diseñada para embellecer la pantalla del usuario. La imagen elegida se mostrará en la parte superior de todas las ventanas sin interferir con su manipulación, garantizando así una experiencia sin interrupciones. Además, se ofrece la funcionalidad de redimensionar y mover la imagen libremente en la pantalla según las preferencias del usuario. <JavaOriginal className="dev-image" /> <CplusplusOriginal className="dev-image" /></p>
            </div>
          } />
          <WindowComponent title="Un poco sobre mí" initialX={100} initialY={100} contenido={
            <div className="presentation-container">
              <h2 className="name">Antonio Jesús Pavón Correa</h2>
              <p className="job-title">Ingeniero Software</p>
              <p className="job-type">Full Stack</p>
              <p className="description">8 añitos en este mundillo y desde el primer día me emociona imaginar y crear cualquier cosa.</p>
              <p className="description">Backend &gt; Frontend</p>
              <div>
                <Button primary onClick={llamarMetodoVisibilidadClepnid}>Clepnid</Button>
              </div>
              <div>
                <Button primary onClick={llamarMetodoVisibilidadFgif}>Fgif</Button>
              </div>
            </div>
          } />

        </div>
        <AppBarComponent />
      </ThemeProvider>
    </div>
  );
}

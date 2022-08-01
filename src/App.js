import React from 'react';

import facebook from './img/icons/icon-facebook.svg';
import twitter from './img/icons/icon-twitter.svg';
import linkedin from './img/icons/icon-linkedin.svg';
import instagram from './img/icons/icon-instagram.svg';
import p_facebook from './img/icons/icon-facebook-purple.svg';
import p_twitter from './img/icons/icon-twitter-purple.svg';
import p_linkedin from './img/icons/icon-linkedin-purple.svg';
import s_asus from './img/sponsors/asus.svg';

export default function App() {
  return (
    <div>
      {/* <canvas class="canvas" id="canvas" width="1920" height="904"></canvas> */}
      {/* HEADER */}
      <header className="header">
        <nav className="main-nav">
          <ul className="main-nav__list flx-a-c">
            <li className="main-nav__item" id="link">
              <a className="main-nav__link" href="./#inicio">
                Inicio
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="./#ponentes">
                Ponentes
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="./#agenda">
                Agenda
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="./#lugar">
                Lugar
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="./#contactanos">
                Contactanos
              </a>
            </li>
            <li className="main-nav__item">
              <a
                className="main-nav__link main-nav__link--inscrip flx-a-c"
                href="./#contactanos"
              >
                Pre-inscripción
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        {/* SOCIAL NETWORK */}
        <section className="section-sociales">
          <a
            className="icon"
            target="_blank"
            href="https://www.facebook.com/Ingenier%C3%ADa-en-Inform%C3%A1tica-y-Sistemas-UNJBG-1933587416925656"
          >
            <img className="icon__img" src={facebook} alt="icon-facebook" />
          </a>
          <a className="icon" target="_blank" href="https://twitter.com/">
            <img className="icon__img" src={twitter} alt="iconTwitter" />
          </a>
          <a
            className="icon"
            target="_blank"
            href="https://www.linkedin.com/feed/"
          >
            <img className="icon__img" src={linkedin} alt="icon-linkedin" />
          </a>
          <a className="icon" target="_blank" href="https://www.instagram.com/">
            <img className="icon__img" src={instagram} alt="icon-instagram" />
          </a>
        </section>
        {/*  */}
        <section
          className="main-banner"
          id="inicio"
          style={{
            backgroundImage: 'url(https://i.ibb.co/f9Qd4bC/banner-1.jpg)',
          }}
        >
          {/* LOGO */}
          <a className="main-logo" href="#">
            <img
              className="main-logo__img"
              src="https://i.ibb.co/rkMdCQB/logo.pngs"
              alt="Logo-esis-postmaster"
            />
          </a>
          {/* HAMBURGER BUTTON */}
          <div id="button-toggle" className="button-toggle">
            <div className="linea-toggle" />
          </div>
          {/* TEXT BANNER */}
          <div className="main-title">
            <h1 className="main-title__h1">
              <div className="main-title__xix flx-a-c">
                <span>&lt; </span>
                <span>X</span>
                <span>I</span>
                <span>X</span>
                <span>&gt;</span>
              </div>
              <div className="main-title__post flx-a-c">
                <span>P</span>
                <span>O</span>
                <span>S</span>
                <span>T</span>
                <span>-</span>
                <span>M</span>
                <span>A</span>
                <span>S</span>
                <span>T</span>
                <span>E</span>
                <span>R</span>
              </div>
            </h1>
            <p className="flx-a-c">
              <span className="lined" />
              "Encuentro de egresados"
            </p>
          </div>
          {/* WIDGET BANNER */}
          <div className="main-info flx-a-c">
            <div className="main-info__container  flx-a-c">
              <div className="main-info__item">SEPTIEMBRE 02</div>
              <div className="main-info__item">TACNA</div>
              <div className="main-info__item main-info__item--preinscrip">
                <a href="./#contactanos">Pre-inscripción</a>
              </div>
            </div>
          </div>
        </section>
        {/* CONTENT */}
        <section className="section-ponentes" id="ponentes">
          <div className="title-section flx-j-c">
            <h2 className="title-section__h2">Los Ponentes</h2>
            <p className="title-section__p">
              04 <span className="lined" /> EXPERTOS DESTACADOS EN LA INDUSTRIA
            </p>
          </div>
          {/* SPEAKERS */}
          <div className="section-ponentes__cards  section-l">
            <article className="ponente">
              <div className="ponente__ocupacion">
                <div className="flx-a-c">
                  01 <span /> Analista de datos
                </div>
              </div>
              <div className="ponente__img">
                <img src="https://i.ibb.co/qycFCyL/ponente.jpg" alt="ponente" />
              </div>
              <div className="ponente__info">
                <h2 className="ponente__name">Manuel Cotrado</h2>
                <p className="ponente__tema">
                  &lt; Building Data Driven Companies &gt;
                </p>
                <p className="ponente__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  nobis architecto voluptate recusandae facere, commodi tempore
                  eos nemo reprehenderit, accusantium deserunt dolore iure enim
                  eligendi incidunt? Laborum beatae maiores quae?
                </p>
                <div className="ponente__redess flx-a-c">
                  Redes_sociales = {'{'}
                  <a className="icon__s" href="./#">
                    <img src={p_facebook} alt="iconFacebook" />{' '}
                  </a>
                  ,
                  <a className="icon__s" href="./#">
                    <img src={p_twitter} alt="iconTwitter" />{' '}
                  </a>
                  ,
                  <a className="icon__s" href="./#">
                    <img src={p_linkedin} alt="iconLinkedin" />{' '}
                  </a>
                  {'}'}
                </div>
              </div>
            </article>
          </div>
        </section>
        {/*  */}
        <section className="section-agenda flx-j-c">
          <div className="title-section flx-j-c title-section--gapmin">
            <h2 className="title-section__h2 title-section__h2--white">
              La Agenda
            </h2>
            <p className="title-section__p">
              <span className="lined" />
              SEPTIEMBRE 02
            </p>
          </div>
          <div className="agenda">
            <pre className="agenda__consulta">
              mysql&gt; SELECT * FROM agenda
            </pre>
            <div className="agenda__container" id="agenda__container">
              <pre>
                + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - +
              </pre>
              <pre>
                | <span class="pre--white">07:00</span> ||{' '}
                <span class="pre--white">Inaguración del evento </span>|
              </pre>
              <pre>
                + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - +
              </pre>
            </div>
          </div>
          <div className="evento-info flx-a-c section-l">
            <div className="evento-info__container flx-a-c">
              <div className="evento-info__data">
                <span id="dia">01</span>
                DÍA
              </div>
              <div className="evento-info__data">
                <span id="ponentes">04</span>
                PONENTES
              </div>
              <div className="evento-info__data">
                <span id="asistentes">200</span>
                ASISTENTES
              </div>
              <div className="evento-info__data">
                <span id="espectadores">∞</span>
                ESPECTADORES
              </div>
            </div>
            <div className="main-nav__item">
              <a
                className="main-nav__link main-nav__link--inscrip flx-a-c"
                href="./#contactanos"
              >
                Pre-inscripción
              </a>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="section-lugar">
          <div className="locale flx-a-c">
            <div className="locale__img">
              <img src="https://i.ibb.co/GvWWMGR/auditorio-1.jpg" alt="" />
            </div>
            <div className="locale__info">
              <h2 className="locale__title">Auditorio de contabilidad</h2>
              <p className="locale__location">
                <span />
                Av. San Martín S/N
                <br />
                Universidad Nacional Jorge Basadre Grohmann
              </p>
              <p className="locale__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                nemo non voluptatum esse aperiam porro doloremque repudiandae
                distinctio similique itaque at ad dicta iste corporis ipsa ex
                perspiciatis. Repudiandae, eaque.
              </p>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="section-auspiciadores" id="auspiciadores">
          <div className="title-section flx-j-c title-section--gapmin">
            <h2 className="title-section__h2 title-section__h2--white">
              Nuestros Auspiciadores
            </h2>
            <p className="title-section__p title-section__p--white">
              <span className="lined lined--white" />
              LIDERES EN LA INDUSTRIA
            </p>
          </div>
          <div className="auspiciadores section-l">
            <a className="auspiciadores__link" href="#">
              <img src={s_asus} alt="" />
            </a>
          </div>
        </section>
        {/*  */}
        <section className="section-contactanos" id="contactanos">
          <div className="wrapper-contactanos section-m">
            <div className="contactanos__title main-title">
              <h1 className="main-title__h1">
                <div className="main-title__xix flx-a-c">
                  <span>&lt; </span>
                  <span>X</span>
                  <span>I</span>
                  <span>X</span>
                  <span>&gt;</span>
                </div>
                <div className="main-title__post flx-a-c">
                  <span>P</span>
                  <span>O</span>
                  <span>S</span>
                  <span>T</span>
                  <span>-</span>
                  <span>M</span>
                  <span>A</span>
                  <span>S</span>
                  <span>T</span>
                  <span>E</span>
                  <span>R</span>
                </div>
              </h1>
              <p>
                <span className="lined" />
                "Encuentro de egresados"
              </p>
            </div>
            <div className="separacion" />
            <div className="contactanos__info flx-a-c">
              <div>
                <h3>¿Qué?</h3>
                <p>XIX POST-MASTER</p>
              </div>
              <div>
                <h3>¿Cúando?</h3>
                <p>September 02, 2022</p>
              </div>
              <div>
                <h3>¿Dónde?</h3>
                <p>Miraflores S/N, Tacna 23000</p>
              </div>
              <div className="main-nav__item">
                <a
                  className="main-nav__link main-nav__link--inscrip"
                  href="./#contactanos"
                  style={{ marginLeft: '1rem', padding: '1rem' }}
                >
                  Pre-inscripción
                </a>
                {/* flx-a-c y probar */}
              </div>
            </div>
            <div className="separacion" />
            <div className="contactanos__form">
              <h2 className="contactanos__form-title">Pre-inscripción</h2>
              <p>
                Para obtener más informacion, no dude en ponerse en contacto
              </p>
              <form action="./#" className="flx-a-c">
                <div className="inputs flx-a-c">
                  <label className="inputs__label">
                    <input
                      className="inputs__item"
                      id="inputName"
                      type="text"
                      name="name"
                      placeholder="* Nombre Completo"
                    />
                  </label>
                  <label className="inputs__label">
                    <input
                      className="inputs__item"
                      id="inputEmail"
                      type="email"
                      name="email"
                      placeholder="* Correo Electrónico"
                    />
                  </label>
                  <label className="inputs__label">
                    <input
                      className="inputs__item"
                      id="inputCod"
                      type="text"
                      name="cod"
                      placeholder="Código Universitario"
                    />
                  </label>
                </div>
                <div className="inputs flx-a-c">
                  <div className="recaptcha" />
                  <input
                    className="enviar"
                    type="submit"
                    defaultValue="Enviar"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="section-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.0105084189727!2d-70.24874027942401!3d-18.024715937075772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915acf5cecd4530f%3A0x91df3a435f8a808f!2sUniverisdad%20Nacional%20Jorge%20Basadre%20Grohmann!5e0!3m2!1ses!2spe!4v1657515555489!5m2!1ses!2spe"
            width="100%"
            style={{ border: 0, height: '75vh', display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <footer className="footer">
        <p className="footer__info">
          © 2022, Sitio Web creado por el Congreso Internacional de Informatica
          y Sistemas
        </p>
      </footer>
      {/*  */}
    </div>
  );
}

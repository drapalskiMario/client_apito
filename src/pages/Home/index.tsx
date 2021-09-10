import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HomeContainer from './style'
import photoAbout from '../../assets/images/imagem-sobre.png'
import photo01 from '../../assets/images/robotica.png'
import photo02 from '../../assets/images/raizes.png'
import photo03 from '../../assets/images/educacao.png'
import photo04 from '../../assets/images/originais.png'

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <div id="home">
        <Header></Header>
        <div id="slogan">
          <h1>muito mais que uma ong</h1>
          <h1>uma transformadora de gerações</h1>
        </div>
      </div>
      <div id="about">
        <div id="text">
          <div id="about-title">
            <h1>sobre nós</h1>
            <p>------</p>
          </div>
          <div id="about-text">
            <p>
              A Associação Paulo Tonucci – APITO surgiu em 1988 na cidade de
              Camaçari-Ba para dar continuidade à ação e legado de Pe. Paulo
              Tonucci. Inicialmente a associação começou com um grupo de
              mulheres, ganhando cada vez mais força e deu início ao FAMI-APITO
              iniciando um serviço de acompanhamento, visitas domiciliares,
              orientações às famílias carentes das periferias de Camaçari.
              Assim, até os dias de hoje, a APITO mantém seu legado e missão,
              pois acreditamos que a instrução eleva as pessoas, alarga
              horizontes , transforma o futuro, corta os fios da dependência e
              faz pessoas livres, assim como Pe. Paulo afirmava.
            </p>
          </div>
          <a href="/about">Quero saber mais</a>
        </div>
        <div id="photo">
          <img src={photoAbout} alt="" />
        </div>
      </div>
      <div id="projects">
        <div id="projects-title">
          <h1>nossos projetos</h1>
          <p>---------</p>
        </div>
        <div id="projects-photos">
          <div id="photo01">
            <img src={photo01} alt="Crianças aprendendo robótica" />
            <p>Robótica</p>
          </div>
          <div id="photo02">
            <img src={photo02} alt="Mulheres e criaças abraçadas" />
            <p>Raízes</p>
          </div>
          <div id="photo03">
            <img
              src={photo03}
              alt="Crianças sorrindo, segurando map mundi e cartas"
            />
            <p>Educação</p>
          </div>
          <div id="photo04">
            <img src={photo04} alt="Crianças tocando tambores" />
            <p>Originais</p>
          </div>
        </div>
      </div>
      <div id="join-us">
        <div id="join-us-title">
          <h2>faça parte</h2>
          <p>--------</p>
        </div>
        <h1>
          Quer nos ajudar a cada vez mais transformar o futuro e fazer pessoas
          livres?
        </h1>
        <div id="join-us-links">
          <a href="join-us">Quero ser um ApitoLover</a>
          <a href="/">Quero ajudar na Vakinha</a>
        </div>
      </div>
      <Footer></Footer>
    </HomeContainer>
  )
}

export default Home

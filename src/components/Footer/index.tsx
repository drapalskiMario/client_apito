import React from 'react'
import logo from '../../assets/images/logo-apito-footer.svg'
import { FooterContainer } from './style'
import logoInstagram from '../../assets/images/instagram-icon.svg'
import logoFacebook from '../../assets/images/facebook-icon.svg'
import logoYoutube from '../../assets/images/youtube-icon.svg'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div id="logo">
        <img src={logo} alt="Logo da Apito" />
      </div>
      <div id="info">
        <div id="talk">
          <p>Fale com a gente!</p>
        </div>
        <div id="contact">
          <p>Se tiver alguma sugestão, crítica ou alguma dúvida</p>
          <p>por favor entre em contato atráves do e-mail:</p>
          <p>loremipsum@apito.org.br</p>
          <p>Siga-nos nas nossas redes</p>
        </div>
        <div id="icons">
          <a
            href="https://www.youtube.com/channel/UCFJtTriAdGb7VyV4pOG2cdw"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoYoutube} alt="Logo do Youtube" />
          </a>
          <a
            href="https://www.instagram.com/paulotonucci/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoInstagram} alt="Logo do Instagram" />
          </a>
          <a
            href="https://www.facebook.com/associacaopaulotonucci/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoFacebook} alt="Logo do Facebook" />
          </a>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer

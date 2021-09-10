import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { JoinUsContainer } from './style'
import emailIcon from '../../assets/images/email-icon.png'
import phoneIcon from '../../assets/images/phone-icon.png'

const JoinUs: React.FC = () => {
  return (
    <JoinUsContainer>
      <Header></Header>
      <div id="container">
        <h1>#apitolovers</h1>
        <p>------</p>
        <h2>Seja um apitolover</h2>
        <h3>
          Deixe seu contato abaixo, nossa equipe entrará em contato com você:
        </h3>
        <form action="#" method="post">
          <div id="form-container">
            <label htmlFor="">Nome</label>
            <input type="text" className="block" />
            <label htmlFor="">Sobrenome</label>
            <input type="text" className="block" />
            <h4>E-mail e Telefone</h4>
            <img src={phoneIcon} alt="Ícone de email" />
            <input type="text" className="contact" />
            <hr />
            <br />
            <img src={emailIcon} alt="Ícone de email" />
            <input type="text" className="contact" />
            <hr />
          </div>
          <button>Enviar</button>
        </form>
      </div>
      <div id="join-us-contact">
        <div id="first">
          <p>Se preferir, entre em contato</p>
          <p>(71) 3644-2068</p>
          <p>(71) 3040-0143</p>
          <p>loremipsum@gmail.com</p>
        </div>
        <div id="second">
          <p>Faça nos uma visita:</p>
          <p>
            Matriz: Av. Concêntrica, n.º 02, Alto da Cruz, 42803-121,
            Camaçari-Bahia-Brasil
          </p>
          <p>
            Filial: Rua Alto dos Noivos, nº52, Bairro dos 46, 42809-058,
            Camaçari-Bahia-Brasil.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </JoinUsContainer>
  )
}

export default JoinUs

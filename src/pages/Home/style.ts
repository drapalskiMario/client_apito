import styled from 'styled-components'
import img from '../../assets/images/imagem-inicial.png'

export const HomeContainer = styled.div`
  
  #home {
    width: 100%;
    height:100vh;
    background: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #slogan {
    margin-bottom: 4rem;
    margin-left: 3rem;
  }

  #slogan h1 {
    font-family: 'Baloo Tamma 2', cursive;
    margin-top: -2rem;
    font-size: 4rem;
    color: #FFFFFF;
    text-shadow: black 5px 1px;
  }

  #about {
    display: flex;
    height: 37.875rem;
    width: 100%;
    background-color: #E1E1E1;
  }
  
  #about #text {
    height: 100%;
    width: 60%;
    margin-left: 3.5rem;
    margin-right: 1rem;
  }
  
  #about #photo {
    height: 100%;
    width: 40%;
  }

  #about-title {
    font-family: 'Baloo Tamma 2', cursive;
    margin-top: 1.5rem;
    height: 16vh;
    margin-bottom: 2.5rem;
  }

  #about-title h1 {
    font-size: 2.5rem;
    color: #4063FF;
  }

  #about-title p {
    margin-top: -4rem;
    font-size: 4.5rem;
    color: #FFC519;
  }

  #about-text {
    font-family: 'Comfortaa', cursive;
    font-size: 1.2rem;
    margin-bottom: 6rem;
  }

  #about a {
    font-family: 'Comfortaa', cursive;
    text-decoration: none;
    color: #000000;
    font-size: 1.2rem;
    padding: 1.8rem;
    background-color: #C4C4C4;
    border-radius: 2rem;
  }

  #photo {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  #photo img {
    width: 90%;
    box-shadow: 15rem 0 0 4rem #C4C4C4;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  #projects {
    width: 100%;
    background-color: #FFC519;
    height: 32rem;
  }
  
  #projects-title {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    height: 33%;
  }
  
  #projects-title h1 {
    font-family: 'Baloo Tamma 2', cursive;
    font-size: 2.75rem;
    color: #4063FF;
    margin-bottom: -4rem;
    margin-top: 1rem;
  }

  #projects-title p {
    font-family: 'Baloo Tamma 2', cursive;
    font-size: 4rem;
    color: #4063FF;
  }

  #projects-photos {
    height: 67%;
    display: flex;
    justify-content: space-around;
  }
    
  #photo01, #photo02, #photo03, #photo04 {
    text-align: center;
    font-family: 'Baloo Tamma 2', cursive;
    font-size: 2rem;
    color: #4063FF;
  }

  #photo01 p, #photo02 p , #photo03 p, #photo04 p {
    margin-top: -1rem;
  }

  #join-us {
    height: 27.125rem;
    width: 100%;
    background-color: #E1E1E1;
  }

  #join-us-title {
    height: 32%;
    margin-left: 3.5rem;
  }

  #join-us-title h2 {
    padding-top: 1rem;
    font-family: 'Baloo Tamma 2', cursive;
    font-size: 3rem;
    color: #4063FF;
  }

  #join-us-title p {
    margin-top: -4rem;
    font-size: 5rem;
    color: #FFC519;
  }

  #join-us h1 {
    font-family: 'Baloo Tamma 2', cursive;
    font-size: 2rem;
    text-align: center;
    color: #000000;
    height: 32%;
    padding-top: 1rem;
  }

  #join-us-links {
    text-align: center;
  }

  #join-us-links a {
    margin: 0 3rem;
    font-family: 'Comfortaa', cursive;
    text-decoration: none;
    color: #000000;
    font-size: 1.2rem;
    padding: 1.8rem;
    background-color: #C4C4C4;
    border-radius: 2rem;
  }
`
export default HomeContainer

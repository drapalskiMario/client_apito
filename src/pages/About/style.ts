import styled from 'styled-components'

export const AboutContainer = styled.div`
  background-color: #E1E1E1;
  
  #fisrt {
    display: flex;
    height: 42.25rem;
    margin-left: 2rem;
  }

  #text-one {
    width: 64%;
  }
  
  #photo-one {
    width: 36%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  #first-title {
    height: 17%;
    font-family: 'Baloo Tamma 2', cursive;
  }

  #first-title h1 {
    font-size: 2.5rem;
    color: #4063FF;
  }

  #first-title p {
    margin-top: -4rem;
    font-size: 4.5rem;
    color: #FFC519;
  }

  #first-text {
    font-family: 'Comfortaa', cursive;
    font-size: 1.25rem;
    color: #000000;
    text-align: justify;
    height: 83%;
  }

  #first-text p{
    margin-bottom: 1rem;
  }

  #photo-one img {
    width: 90%;
    height: auto;
    box-shadow: 12rem 0 0 5rem #C4C4C4;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  #second {
    width: 100%;
    height: 80rem;
    display: flex;
  }

  #second-text {
    height: 100%;
    width: 72%;
    font-family: 'Comfortaa', cursive;
    font-size: 1.25rem;
    color: #000000;
    text-align: justify;
  }

  #paragraph {
    margin-top: 5.5rem;
  }

  #second-text p {
    margin: 2rem 0;
  }
  
  #second-photo {
    height: 100%;
    width: 28%;
  }

   #second-photo h1,  #second-photo p {
     font-family: 'Baloo Tamma 2', cursive;
     margin-left: 2rem;
   }


  #second-photo h1 {
    margin-top: 2rem;
    font-size: 2.5rem;
    color: #4063FF;
  }

  #second-photo p {
    margin-top: -4rem;
    font-size: 4.5rem;
    color: #FFC519;
  }

  #second-photo img {
    margin-top: 30rem;
    width: 92.5%;
    box-shadow: -22.5rem 0 0 15rem #C4C4C4;
    border-radius: 0rem 0.1rem 0.1rem 0rem;
  }
`

import styled from 'styled-components'

export const HeaderContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');

  width: 100%;
  height: 7.875em;
  background: #4063ff;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #navbar {
    width: 21.65rem;
    margin-right: 2.875rem;
  }
  #navbar ul {
    display: flex;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

  #navbar ul li a {
    text-decoration: none;
    font-family: 'Comfortaa', cursive;
    font-size: 1.25rem;
    line-height: 1.375rem;
    color: #FFFFFF;
  }

  #logo {
    margin-left: 3.75rem;
  }
`

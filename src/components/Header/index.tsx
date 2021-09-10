import React from 'react'
import { HeaderContainer } from './style'
import logoApito from '../../assets/images/logo-apito.svg'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div id="logo">
        <a href="/">
          <img src={logoApito} alt="" />
        </a>
      </div>
      <div id="navbar">
        <nav>
          <ul>
            <li>
              <a href="/about">sobre nós</a>
            </li>
            <li>
              <a href="/blog">blog</a>
            </li>
            <li>
              <a href="/join-us">faça parte</a>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  )
}

export default Header

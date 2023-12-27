import React from 'react';
import { Link } from 'react-router-dom'
import logoHeader from '../../assets/logoHeader.png';
import '../../styles/Header.scss'
import styled from 'styled-components'

const Logo = styled.img`
    width: 210.32px
    height: 68px
`
function Header() {
    return <header>
                <Logo src={logoHeader} alt="Logo" />
                <nav id="nav">
                    <Link to='/Home'>Accueil</Link>
                    <Link to='/APropos'>A propos</Link>
                </nav>
            </header>
}
export default Header
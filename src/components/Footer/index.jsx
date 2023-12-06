import React from 'react';
import logoFooter from '../../assets/logoFooter.png';
import '../../styles/Footer.scss'

function Footer() {
    return <footer>
                <img src={logoFooter} alt="Logo" />
                <p>© 2020 Kasa. All rights reserved</p>
           </footer>
}

export default Footer
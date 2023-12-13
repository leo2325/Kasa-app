import React from 'react';
import { Link } from 'react-router-dom'

import '../../styles/Error.scss';

function Error404() {
    return (
        <section className='Error404'>
            <div>
                <h4>404</h4>
            </div>
            <div className=''>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div className=''>
                <Link to='/Home'>Retourner sur la page d'acceuil.</Link>
            </div>
        </section>
    )
}

export default Error404
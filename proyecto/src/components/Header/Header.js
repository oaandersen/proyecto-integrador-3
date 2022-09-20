import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'


function Header() {
 
    return (
        <>
            <header className='header'>
                <a href="/" className="logo">
                    <img className='logo' src="./img/logo.png" alt="Logo de la pagina" />
                    <h2 className='nombre-empresa'>We Stream</h2>
                </a>

                <nav>
                    <Link to='/'>Home</Link>

                    <Link to='/FavsAlbum'>Albumes Favoritos</Link>

                    <Link to='/FavsCanciones'>Canciones Favoritos</Link>

                    <Link to='/ViewAll'>View All</Link>
                </nav>



            </header>
            <hr className="header-separador" />
        </>
    )
}
    
export default Header;




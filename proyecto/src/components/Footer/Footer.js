import React from 'react'
import './styles.css'

function Footer() {

    return (
        <div className='container'>
            <h2 className='title-footer'>Contactanos a través de ...</h2>
            <div className='row'>
                <div className='col-12 col-lg-4'>
                    <article className='footer-data'>
                        <img className='icono' src="https://cdn-icons-png.flaticon.com/512/888/888853.png" alt="Gmail" />
                        <ul>
                            <li>fbory@udesa.edu.ar</li>
                            <li>oandersen@udesa.edu.ar</li>
                            <li>ntufro@udesa.edu.ar</li>
                        </ul>

                    </article>
                </div>
                <div className='col-12 col-lg-4'>
                    <article className='footer-data'>
                        <img className='icono' src="https://es.seaicons.com/wp-content/uploads/2016/03/Linkedin-icon-15.png" alt="Linkedin" />
                        <ul>
                            <li>Facundo Bory</li>
                            <li>Oliver Andersen</li>
                            <li>Nicolás Tufro</li>
                        </ul>
                    </article>
                </div>
                <div className='col-12 col-lg-4'>
                    <article className='footer-data'>
                        <img className='icono' src="https://www.comprarvisitas.online/img/cms/instagram.png" alt="Instagram" />
                        <ul>
                            <li>@facubory</li>
                            <li>@oliver_a_andersen</li>
                            <li>@nico_tufro</li>
                        </ul>
                    </article>
                </div>

            </div>
        </div>
    )
}

export default Footer;
import React from 'react'
import Albums from '../../components/Albums/Albums';
import Canciones from '../../components/Canciones/Canciones';

function Home(props){

    return(
        <>
        <h1> Home del Sitio</h1>
        <Canciones/>
        <Albums/>
        </>
    )
}

export default Home;
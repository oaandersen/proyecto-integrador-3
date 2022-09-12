import React from 'react'
import Albums from '../../components/Albums/Albums';
import Canciones from '../../components/Canciones/Canciones';

function Home(props){

    return(
        <>
        <Canciones/>
        <Albums/>
        </>
    )
}

export default Home;
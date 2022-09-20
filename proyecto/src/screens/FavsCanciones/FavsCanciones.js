import React from 'react'
import FavoritosCanciones from '../../components/FavoritosCanciones/FavoritosCanciones';

function FavsCanciones(props) {

    const id = props.match.params.id

        return(
           <>
           <FavoritosCanciones id = {id}/>
           </>
        )
    }

export default FavsCanciones;
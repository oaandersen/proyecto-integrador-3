import React from 'react'
import Album from '../../components/Album/Album';
import Canciones from '../../components/Canciones/Canciones';
import Favorites from '../../components/Favorites/Favorites';

function Favoritos(props) {

    const id = props.match.params.id

        return(
           <>
           <Favorites id = {id}/>
           </>
        )
    }

export default Favoritos;
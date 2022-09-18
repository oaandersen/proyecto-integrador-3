import React from 'react'
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
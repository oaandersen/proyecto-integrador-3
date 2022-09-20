import React from 'react'
import FavoritosAlbum from '../../components/FavoritosAlbum/FavoritosAlbum';

function FavsAlbum(props) {

    const id = props.match.params.id

        return(
           <>
           <FavoritosAlbum id = {id}/>
           </>
        )
    }

export default FavsAlbum;
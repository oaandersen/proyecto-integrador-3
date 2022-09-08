import React from 'react'
import DetalleAlbum from '../../components/DetalleAlbum/DetalleAlbum';

function DetailAlbum(props){

    const id = props.match.params.id


    return(
        <>
        <DetalleAlbum id={id}/> 
        </> 
    )
}

export default DetailAlbum;
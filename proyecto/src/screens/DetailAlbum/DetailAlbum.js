import React from 'react'
import DetalleAlbum from '../../components/DetalleAlbum/DetalleAlbum';

function DetailAlbum(props){

    const idAlbum = props.match.params.id


    return(
        <>
        <DetalleAlbum idAlbum={idAlbum}/> 
        </> 
    )
}

export default DetailAlbum;
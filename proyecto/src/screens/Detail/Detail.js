import React from 'react'
import Detalle from '../../components/Detalle/Detalle';

function Detail(props){

    const id = props.match.params.id


    return(
        <>
        <Detalle id={id}/> 
        </> 
    )
}

export default Detail;
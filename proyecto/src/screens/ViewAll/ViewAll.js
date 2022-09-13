import React from 'react'
import VerTodo from '../../components/VerTodo/VerTodo';

function ViewAll(props){

    const id = props.match.params.id

    return(
        <>
        < VerTodo id={id}/>
        </>
    )
}

export default ViewAll;
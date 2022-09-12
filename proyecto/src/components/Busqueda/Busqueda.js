import React, { Component } from 'react'

class Busqueda extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor:''
        }
    }

    evitarSubmit(event){
        console.log(event)
        event.preventDefault()
    }

    guardarValor(event){
        this.setState({
            valor: event.target.value
        }, ()=> this.props.filter(this.state.valor)
        ) 
    }

  render() {
    return (
      <form onSubmit={(e)=> this.evitarSubmit(e)}>
        <input onChange={(e)=> this.guardarValor(e)} />
        <button>Submit</button>
      </form>
    )
  }
}

export default Busqueda
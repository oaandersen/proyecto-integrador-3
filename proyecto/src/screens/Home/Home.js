import React, {Component}from 'react'
import Albums from '../../components/Albums/Albums';
import Canciones from '../../components/Canciones/Canciones';
import Busqueda from '../../components/Busqueda/Busqueda';
class Home extends Component{
    constructor(props){
    super(props)
    this.state={
      musica: [],
      backup: [],
      busqueda:'',
    }
  } 

    buscarData(valor){
fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${valor}`)
.then(resp => resp.json())
.then(data => {console.log(data)
this.setState({
    guardarValor:data.data,
    buscar:true
})
})
.catch(err => console.log(err))
    }
    render(){
    return(
        <>
        <Busqueda buscar = {(valor) => this.buscar} />
        <Canciones/>
        <Albums/>
        {
           
        }
        </>
    )
}
}
export default Home;
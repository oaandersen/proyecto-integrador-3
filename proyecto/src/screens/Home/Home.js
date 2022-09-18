import React, {Component} from 'react'
import Albums from '../../components/Albums/Albums';
import Cancion from '../../components/Cancion/Cancion';
import Canciones from '../../components/Canciones/Canciones'
import Busqueda from '../../components/Busqueda/Busqueda';
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      musica: {},
      backup: {},
      buscar: false,
      guardarValor: [],
      ready: false,
      readySearch: false,
    }
  }

  buscarData(valor) {
    if (valor !== "") {
      fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${valor}`)
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
          this.setState({
            guardarValor: data.data,
            buscar: true,
            readySearch: true,
          })
        })
        .catch(err => console.log(err))
    } else {
      this.setState({
        guardarValor: []
      })
    }
  }
  render() {
    return ( 
      <>
      < Busqueda metodoBuscar = {
        (valor) => this.buscarData(valor)
      }
      /> {
        this.state.readySearch ?
          this.state.guardarValor.map((music, idx) => < Cancion 
          key = {`${Date.now()}-${idx}`}
          info = {music}
           /> ): ''
          }
          <Canciones / >
          <Albums / >

          </>
      )
    }
  }
  export default Home;
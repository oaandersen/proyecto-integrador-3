import React, { Component } from 'react'
import Cancion from '../Cancion/Cancion';



class Canciones extends Component {
  constructor(props) {
    super(props)
    this.state = {
      musica: [],
      backup: [],
      busqueda: '',
      pagina: 0,
      favorito: [],
      ready: false
    }
  }



  componentDidMount() {
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?index=15&limit=10')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          musica: data.data,
          backup: data.data,
          pagina: this.state.pagina + 1,
          index: 10,
          ready: true
        })
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  cargarMas() {
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?index=${this.state.index + 10}&limit=10?page=${this.state.pagina + 1}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        musica: this.state.musica.concat(data.data),
        pagina: this.state.pagina + 1,
        index: this.state.index + 10
      }))
      .catch(err => console.log(err))

  }



  favorites(id) {
    let favoritoArr = this.state.musica.filter(elm => elm.id === id)
    this.setState({
      favorito: this.state.favorito.concat(favoritoArr)
    })

    let arrayAGuardar = JSON.stringify(this.state.favorito)

    localStorage.setItem('trackFavoritos', arrayAGuardar)

    let recuperarStorage = localStorage.getItem('trackFavoritos')
    console.log(JSON.parse(recuperarStorage))
  }


  borrar(id) {
    let arrayFiltrado = this.state.musica.filter(music => music.id !== id)
    this.setState({
      musica: arrayFiltrado
    })
  }

  backup() {
    this.setState({
      musica: this.state.backup
    })
  }

  render() {
    return (
      <>
        {this.state.ready ?
          <div>
            <h2 className='titulo-home'>Top 10 canciones</h2>
            <section className='canciones-card'>
              {this.state.musica.map((music, idx) =>
                <Cancion
                  key={`${Date.now()}-${idx}`}
                  info={music}
                  borrar={(name) => this.borrar(name)}
                  favorito={(id) => this.favorites(id)}
                />)}
            </section>
            <section className='section-boton'>
              <button className='boton3' onClick={() => this.backup()}>Backup</button>
              <button className='boton3' onClick={() => this.cargarMas()}>Cargar mas</button>
            </section>
          </div>
          :
          <h1>Cargando...</h1>
        }
      </>
    )
  }
}

export default Canciones;



import React, { Component } from "react";
import VerTodoCanciones from "../VerTodoCanciones/VerTodoCanciones";
import VerTodoAlbums from "../VerTodoAlbums/VerTodoAlbums";

class VerTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      musica: [],
      backup: [],
      pagina: 0,
      ready: false
    }
  }

  componentDidMount() {
    fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?index=15&limit=100')
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


  render() {
    return (
      <>
        {this.state.ready ?
          <div>
            <h2 className='titulo-home'>canciones</h2>
            <section className='canciones-card'>
              {this.state.musica.map((music, idx) =>
                <VerTodoCanciones
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

            <h2 className='titulo-home'>Albums</h2>
            <section className='canciones-card'>
              {this.state.musica.map((music, idx) =>
                <VerTodoAlbums
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
export default VerTodo
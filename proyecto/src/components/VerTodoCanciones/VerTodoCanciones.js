import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class VerTodoCanciones extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMore: false,
            textoBoton: 'Ver mas',
        }
    }

    changeShowMore() {
        if (this.state.showMore) {
            this.setState({
                showMore: false,
                textoBoton: 'Ver más'
            })
        } else {
            this.setState({
                showMore: true,
                textoBoton: 'Ver menos'
            })
        }
    }

    render() {
        return (

            <>

                <div className="cancion-card">
                    <img
                        src={this.props.info.artist.picture}
                        alt={`Una imagen de ${this.props.info.name}`}
                    />
                    <h3>{this.props.info.title}</h3>



                    {
                        this.state.showMore ?
                            <div>
                                <h4> Nombre Artista: {this.props.info.artist.name}</h4>
                                <h4> Album: {this.props.info.album.title}</h4>
                                <p>Duracion de la Cancion: {this.props.info.duration}s</p>
                            </div>
                            :
                            ''
                    }
                    <a onClick={() => this.changeShowMore()}> {this.state.textoBoton} </a><br></br><br></br>

                    <Link to={'/Detail/' + this.props.info.id}> Detalle</Link><br></br><br></br>
                    <button className='button' onClick={() => this.props.favorito(this.props.info.id)}>Favoritos</button>
                    <button className='button2' onClick={() => this.props.borrar(this.props.info.id)}>Borrar</button>

                </div>


            </>

        )
    }
}

export default VerTodoCanciones;
import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Album extends Component {
    constructor(props){
        super(props)
        this.state ={
            showMore:false,
            textoBoton:'Ver mas'
        }
    }

    changeShowMore(){
        if(this.state.showMore){
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

    render(){
        return (
                <div className="Album-card">
                    <img 
                        src={this.props.info.album.cover}
                        alt={`Una imagen de ${this.props.info.name}`}
                    />
        
                    <h3> Nombre Album: {this.props.info.album.title}</h3>

                    <h4>Descripcion Album:</h4>
                    
                
                    {
                    this.state.showMore ?
                        <p>{this.props.info.extra}</p>
                    : 
                    ''
                    }
                    <a onClick={() => this.changeShowMore()}> {this.state.textoBoton} </a>

                    <Link to={'/Detail/' + this.props.info.id}> Detalle</Link>
                    <button onClick={()=> this.props.favorito(this.props.info.id)}>Favoritos</button>
                    <button onClick={() => this.props.borrar(this.props.info.id)}>Borrar</button>
                </div>

            )
    }
}

export default Album;
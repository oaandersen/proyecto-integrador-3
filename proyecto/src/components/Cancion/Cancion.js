import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

class Cancion extends Component {
    constructor(props){
        super(props)
        this.state ={
            showMore:false,
            textoBoton:'Ver mas',
            favorito: false,
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('trackFavoritos')
        let parsedStorage = JSON.parse(storage)
        let isFavorite
        if(parsedStorage !== null){
           isFavorite = parsedStorage.includes(this.props.info.id)
        }
        if(isFavorite){
            this.setState({
                favorito: true
            })
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

    addFavorites(id){
        let storage = localStorage.getItem('trackFavoritos')

        if(storage == null){
            let idsArr = [id]
            let idsArrToString = JSON.stringify(idsArr)
            localStorage.setItem('trackFavoritos', idsArrToString)
        } else {
            let parsedStorage = JSON.parse(storage)
            parsedStorage.push(id)
            let storageToString = JSON.stringify(parsedStorage)
            localStorage.setItem('trackFavoritos', storageToString)
        }

        this.setState({
            favorito: true
        })
    }

    removeFavorites(id){

        let storage = localStorage.getItem('trackFavoritos')
        let storageParsed = JSON.parse(storage) 
        let filteredStorage = storageParsed.filter(elm => elm !== id)
        let storageToString = JSON.stringify(filteredStorage)
        localStorage.setItem('trackFavoritos', storageToString)
        this.setState({
            favorito: false
        })
    }
    render(){
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
                    <a onClick={() => this.changeShowMore()}> {this.state.textoBoton} </a>
                    <br></br>
                    <Link className='button' to={'/Detail/' + this.props.info.id}> Detalle</Link>
                    {
                        this.state.favorito ?
                        <button className='button' onClick={() => this.removeFavorites(this.props.info.id)}>Sacar favoritos</button>
                        :
                        <button className='button' onClick={() => this.addFavorites(this.props.info.id)}>Favoritos</button>
                    }
                    <button className='button' onClick={() => this.props.borrar(this.props.info.id)}>Borrar</button>
            
                    </div>
                    

                    </>    
            
            )
    }
}

export default Cancion;
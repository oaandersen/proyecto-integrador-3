import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

class Album extends Component {
    constructor(props){
        super(props)
        this.state ={
            showMore:false,
            textoBoton:'Ver mas',
            favoritoAlbum: false,
        }
    }
    componentDidMount(){
        let storage = localStorage.getItem('albumFavoritos')
        let parsedStorage = JSON.parse(storage)
        let isFavorite
        if(parsedStorage !== null){
           isFavorite = parsedStorage.includes(this.props.info.id)
        }
        if(isFavorite){
            this.setState({
                favoritoAlbum: true
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
        let storage = localStorage.getItem('albumFavoritos')

        if(storage == null){
            let idsArr = [id]
            let idsArrToString = JSON.stringify(idsArr)
            localStorage.setItem('albumFavoritos', idsArrToString)
        } else {
            let parsedStorage = JSON.parse(storage)
            parsedStorage.push(id)
            let storageToString = JSON.stringify(parsedStorage)
            localStorage.setItem('albumFavoritos', storageToString)
        }

        this.setState({
            favoritoAlbum: true
        })
    }

    removeFavorites(id){

        let storage = localStorage.getItem('albumFavoritos')
        let storageParsed = JSON.parse(storage) 
        let filteredStorage = storageParsed.filter(elm => elm !== id)
        let storageToString = JSON.stringify(filteredStorage)
        localStorage.setItem('albumFavoritos', storageToString)
        this.setState({
            favoritoAlbum: false
        })
    }

    render(){
        return (
                <div className="album-card">
                    <img 
                        src={this.props.info.album.cover}
                        alt={`Una imagen de ${this.props.info.name}`}
                    />
        
                    <h3> Album: {this.props.info.album.title}</h3>

                    
                
                    {
                    this.state.showMore ?
                    
                        <div> 
                        <h4>Descripcion Album: No hay descripcion en este Album!</h4>
                        <h4>{}</h4>
                        </div>
                    : 
                    ''
                    }
                    <a onClick={() => this.changeShowMore()}> {this.state.textoBoton} </a><br></br><br></br>

                    <Link className='links' to={'/DetailAlbum/' + this.props.info.album.id}> Detalle</Link><br></br><br></br>
                    {
                        this.state.favoritoAlbum ?
                        <button className='button' onClick={() => this.removeFavorites(this.props.info.id)}>Sacar favoritos</button>
                        :
                        <button className='button' onClick={() => this.addFavorites(this.props.info.id)}>Favoritos</button>
                    }
                    <button className='button2' onClick={() => this.props.borrar(this.props.info.id)}>Borrar</button>
                </div>

            )
    }
}

export default Album;
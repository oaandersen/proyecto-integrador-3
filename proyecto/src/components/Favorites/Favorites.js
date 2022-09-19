import React, {Component} from "react";
import Cancion from "../Cancion/Cancion";
import Album from "../Album/Album";
import './styles.css'

class Favorites extends Component {
        constructor(props){
            super(props)
            this.state = {
                arrFavs:[],
                arrFavsAlbums:[],
                arrayAguardar: [],
                ready:false,
                readyAlbum: false,
            }
        }
        componentDidMount(){
           
            let storage = localStorage.getItem('trackFavoritos')
            if(storage !== null){
                let parsedStorage = JSON.parse(storage)
        
                Promise.all(
                    parsedStorage.map(id => {
                    return(
                        
                    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`)
                    .then(resp => resp.json()) 
                )}))
        .then(data=> {this.setState({
            arrFavs:data,
            ready:true
            })
            })
            
        .catch(err => console.log(err))
          }

            let storageAlbum = localStorage.getItem('albumFavoritos')
            if(storageAlbum !== null){
                let parsedStorageAlbum = JSON.parse(storageAlbum)
        
                Promise.all(
                    parsedStorageAlbum.map(id => {
                    return(
                    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${id}`)
                    .then(resp => resp.json()) 
                )}))
        .then(data=> {this.setState({
            arrFavsAlbums:data,
            readyAlbum:true
            })
            console.log(data)})
            
        .catch(err => console.log(err))
            }
            
        }
        render(){
            return(
                <>
                <div>
                <h1 className='titulo-home'>Tus canciones favoritas</h1>
                {
                this.state.ready ? 
                    
                    this.state.arrFavs.map((music, idx)=>
                    <Cancion
                    key={`${Date.now()}-${idx}`}
                    info={music}
                /> ): ""
                }
                            <h1>Tus Albums favoritos</h1>
                {
                this.state.readyAlbum ? 
                    
                    this.state.arrFavsAlbums.map((music, idx)=>
                    <Album
                    key={`${Date.now()}-${idx}`}
                    info={music}
                /> ): ""
            
                }
                </div>
                </>
            )
        }
}

export default Favorites
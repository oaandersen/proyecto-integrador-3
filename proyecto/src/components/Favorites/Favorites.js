import React, { Component } from "react";
import Cancion from "../Cancion/Cancion";
import Album from "../Album/Album";
import './styles.css'

class Favorites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrFavs: [],
            arrFavsAlbums: [],
            arrayAguardar: [],
            ready: false,
            readyAlbum: false,
        }
    }
    componentDidMount() {

        let storage = localStorage.getItem('trackFavoritos')
        if (storage !== null) {
            let parsedStorage = JSON.parse(storage)

            Promise.all(
                parsedStorage.map(id => {
                    return (

                        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`)
                            .then(resp => resp.json())
                    )
                }))
                .then(data => {
                    this.setState({
                        arrFavs: data,
                        ready: true
                    })
                })

                .catch(err => console.log(err))
        }

        let storageAlbum = localStorage.getItem('albumFavoritos')
        if (storageAlbum !== null) {
            let parsedStorageAlbum = JSON.parse(storageAlbum)

            Promise.all(
                parsedStorageAlbum.map(id => {
                    return (
                        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${id}`)
                            .then(resp => resp.json())
                    )
                }))
                .then(data => {
                    this.setState({
                        arrFavsAlbums: data,
                        readyAlbum: true
                    })
                    console.log(data)
                })

                .catch(err => console.log(err))
        }

    }
    render() {
        return (
            <>
                    <h1 >Tus canciones favoritas</h1>
                    <div className="canciones-card">
                    {
                        this.state.ready ?

                            this.state.arrFavs.map((music, idx) =>
                                <Cancion
                                    key={`${Date.now()}-${idx}`}
                                    info={music}
                                />) : ""
                    }
                </div> <h1>Tus Albums favoritos</h1>
                <div className="canciones-card">
                    {
                        this.state.readyAlbum ?

                            this.state.arrFavsAlbums.map((music, idx) =>
                                <Album
                                    key={`${Date.now()}-${idx}`}
                                    info={music}
                                />) : ""

                    } </div>

            </>
        )
    }
}

export default Favorites
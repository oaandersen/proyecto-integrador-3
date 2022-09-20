import React, { Component } from "react";
import AlbumFavorito from "../Album/AlbumFavorito";

class FavoritosAlbum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrFavsAlbums: [],
            arrayAguardar: [],
            readyAlbum: false,
        }
    }
    componentDidMount() {

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
                <h1>Tus Albums favoritos</h1>
                <div className="canciones-card">
                    {
                        this.state.readyAlbum ?

                            this.state.arrFavsAlbums.map((music, idx) =>
                                <AlbumFavorito
                                    key={`${Date.now()}-${idx}`}
                                    info={music}
                                />) : ""

                    } </div>
            </>
        )
    }
}


export default FavoritosAlbum

import React, { Component } from "react";
import Cancion from "../Cancion/Cancion";
import './styles.css'

class FavoritosCanciones extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrFavs: [],
            arrayAguardar: [],
            ready: false,
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
                </div>

            </>
        )
    }
}

export default FavoritosCanciones
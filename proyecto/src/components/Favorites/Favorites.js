import React, {Component} from "react";
import './styles.css'

class Favorites extends Component {
        constructor(props){
            super(props)
            this.state = {
                arrFavs:[]
            }
        }
        componentDidMount(){
            let storage = localStorage.getItem('Favorites')
            if(storage !== null){
                let parsedStorage = JSON.parse(storage)
        
                Promise.all(     parsedStorage.map(elm => {
                    return(
                    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?${elm}`)
                    .then(resp => resp.json())
                    
        
                )}))
        .then(data=> this.setState(
            arrFavs=>data
        ))
        .catch(err => console.log(err))
            }
        }
        render(){
            return(
                <>
                {
                this.state.ready ? 
                <div>

                </div>
                :
                <h1>Cargando...</h1>
               }
                </>
            )
        }
}

export default Favorites
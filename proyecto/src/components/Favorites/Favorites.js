import React, {Component} from "react";
import Canciones from "../Canciones/Canciones";
import './styles.css'

class Favorites extends Component {
        constructor(props){
            super(props)
            this.state = {
                arrFavs:[],
                arrayAguardar: []
                
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
        .then(data=> this.setState({
            arrFavs:data
            }))
        .catch(err => console.log(err))
            }
        }
        render(){
            return(
                <>
                {
                this.state.ready ? 
                <div>
<<<<<<< HEAD
                    {this.state.arrFavs.map((music, idx)=>
                    <Canciones
                    key={`${Date.now()}-${idx}`}
                    info={music}
                    />)}
=======
                <p>  </p>
>>>>>>> 75bb51b8ef332fe52e7bd5df7211c0af0d1cbcae
                </div>
                :
                <h1>Cargando...</h1>
               }
                </>
            )
        }
}

export default Favorites
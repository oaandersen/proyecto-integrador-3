import React, {Component} from "react";
import Cancion from "../Cancion/Cancion";
import Canciones from "../Canciones/Canciones";
import './styles.css'

class Favorites extends Component {
        constructor(props){
            super(props)
            this.state = {
                arrFavs:[],
                arrayAguardar: [],
                ready:false
            }
        }
        componentDidMount(){
            console.log('aca')
            let storage = localStorage.getItem('Favorites')
            if(storage !== null){
                let parsedStorage = JSON.parse(storage)
        
                Promise.all(     parsedStorage.map(elm => {
                    return(
                    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?${elm}`)
                    .then(resp => resp.json())
                    
        
                )}))
        .then(data=> {this.setState({
            arrFavs:data,
            ready:true
            })
            console.log(data)})
            
        .catch(err => console.log(err))
            }
        }
        render(){
            return(
                <>
                {
                this.state.ready ? 
                    
                    this.state.arrFavs.map((music, idx)=>
                    <Cancion
                    key={`${Date.now()}-${idx}`}
                    info={music}
                /> ): ""
            
                }
            
                </>
            )
        }
}

export default Favorites
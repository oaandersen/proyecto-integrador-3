import React, {Component} from 'react'

class Favoritos extends Component{
constructor(props){
    super(props)
    this.state = {
        arrFavs:[]
    }
}
componentDidMount(){
    let storage = localStorage.getItem('Favoritos')
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
            <div>
                Favoritos
            </div>
        )
    }

}

export default Favoritos;
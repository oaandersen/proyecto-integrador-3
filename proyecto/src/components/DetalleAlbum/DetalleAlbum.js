import React, {Component} from 'react';


class DetalleAlbum extends Component {
    constructor(props){
      super(props)
      this.state={
        musica: [],
        ready:false,
      }

    }
    
   

    componentDidMount(){
        console.log('pasa por aqui');
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.props.idAlbum}`)
        .then(resp => resp.json())
        .then(data =>{ this.setState({
          musica: data,
          ready:true
        
        })
        console.log(data)
    })
    .catch(err => console.log('falla'))
     
    }

    render(){
        console.log('Este es desde el render')
       console.log(this.state.musica);
        return(
            
            <>
            
            {       
                this.state.ready ?
                <div>
                 
                <img 
                src={this.state.musica.cover}
                alt={`Una imagen de ${this.state.musica.cover}`}
            />
                <h1>Album: {this.state.musica.title}</h1>
                <h1>Artista: {this.state.musica.artist.name}</h1>
<<<<<<< HEAD
                <p> {this.state.musica.tracks.data.title} </p>
                </div> 
=======
                <p> Lista de Canciones del Album:</p>
                <ul> 
                  
                  {this.state.musica.tracks.data.map((track) =>{
                    return <li>{track.title}</li>
                  })} 
                  
                </ul>

                </div>

              
>>>>>>> 19604196368a6faddc0d7ae286db9c9c08d84c5a
                :
                <h1>Cargando...</h1>
            }
            </>
    

    )}
}
    

export default DetalleAlbum
import React, {Component} from 'react';
import './styles.css'

class Detalle extends Component {
    constructor(props){
      super(props)
      this.state={
        musica: [],
        ready:false,
      }

    }
    
   

    componentDidMount(){
        console.log('pasa por aqui');
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.props.id}`)
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
                
                    
                this.state.ready ? <div>
                <img 
                src={this.state.musica.album.cover}
                alt={`Una imagen de ${this.state.musica.album.cover}`}
            />
                <h1>Cancion: {this.state.musica.title}</h1>
                <h1>Artista: {this.state.musica.artist.name}</h1>
                <h2>Disco: {this.state.musica.album.title}</h2>
                <iframe title="iframe" src={this.state.musica.preview} />
                </div>  
                :
                <h1>Cargando...</h1>

                
            }
            
            </>
    

    )}
}
    

export default Detalle
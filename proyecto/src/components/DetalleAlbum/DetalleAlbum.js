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
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.props.id}`)
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
                
                </div>
                :
                <h1>Cargando...</h1>

                
            }
            
            </>
    

    )}
}
    

export default DetalleAlbum
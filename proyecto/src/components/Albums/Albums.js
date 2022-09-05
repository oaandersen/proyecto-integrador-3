import React, {Component} from 'react'
import Busqueda from '../Busqueda/Busqueda';
import Album from '../Album/Album';



    class Albums extends Component {
        constructor(props){
          super(props)
          this.state={
            musica: [],
            backup: [],
            busqueda:'',
            pagina:0,
            favorito:[]
          }
        }
      
        componentDidMount(){
          fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?index=15&limit=10%27')
          .then(resp => resp.json())
          .then(data =>{ this.setState({
            musica: data.data,
            backup: data.data,
            pagina: this.state.pagina + 1,
            index: 10
          })
        console.log(data)})
          .catch(err => console.log(err))
        }
      
        cargarMas(){
          fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?index=${this.state.index + 10}&limit=10?page=${this.state.pagina + 1}`)
          .then(resp => resp.json())
          .then(data => this.setState({
            musica: this.state.musica.concat(data.data),
            pagina: this.state.pagina + 1,
            index: this.state.index + 10
          }))
          .catch(err => console.log(err))
      
        }
      
       

        favorites(id){
          let favoritoArr = this.state.musica.filter(elm => elm.id === id)
          this.setState({
            favorito: this.state.favorito.concat(favoritoArr)
          })
      
          let arrayAGuardar = JSON.stringify(this.state.favorito)
      
          localStorage.setItem('favoritos', arrayAGuardar)
      
          let recuperarStorage = localStorage.getItem('favoritos')
          console.log(JSON.parse(recuperarStorage))
        }
      
      
        borrar(id){
          let arrayFiltrado = this.state.musica.filter(music=> music.id !== id)
          this.setState({
            musica: arrayFiltrado
          })
        }
      
        backup(){
          this.setState({
            musica: this.state.backup
          })
        }
        filtrarMusica(nombre) {
          let arrayFiltrado = this.state.backup.filter(music=> music.name.toLowerCase().includes(nombre))
        this.setState({
         musica:arrayFiltrado
        })
        } 


        
        
        render(){
            return (
              <>
              <Busqueda filtrar = { (nombre) => this.filtrarMusica(nombre) }/>
                <h2>Top 10 Albums</h2>
                <section>
                  {this.state.musica.map((music, idx) => 
                    <Album 
                      key={`${Date.now()}-${idx}`}
                      info={music}
                      borrar={(name)=> this.borrar(name)}
                      favorito={(id)=> this.favorites(id)}  
                    />)}
        
                    <button onClick={()=> this.backup()}>Backup</button>
                    <button onClick={()=> this.cargarMas()}>Cargar mas</button>
                </section>
               
              </>
            )
          }
        }
        
        export default  Albums;
   

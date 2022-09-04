import React, {Component} from 'react'
import Cancion from '../Cancion/Cancion';

function Canciones(props){

    const info=[];

    class Canciones extends Component {
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
          fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10%27')
          .then(resp => resp.json())
          .then(data => this.setState({
            musica: data.results,
            backup: data.results,
            pagina: this.state.pagina + 1
          }))
          .catch(err => console.log(err))
        }
      
        cargarMas(){
          fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10?page=${this.state.pagina + 1}`)
          .then(resp => resp.json())
          .then(data => this.setState({
            musica: this.state.musica.concat(data.results),
            pagina: this.state.pagina + 1
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
              <search filtrar = { (nombre) => this.filtrarMusica(nombre) }/>
                <h2>Top 10 canciones</h2>
                <section className="card-container">
                  {this.state.musica.map((music, idx) => 
                    <Cancion 
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
        }}
        
        export default  Canciones;
   


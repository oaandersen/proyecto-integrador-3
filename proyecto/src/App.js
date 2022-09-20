import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Detail from './screens/Detail/Detail'
import DetailAlbum from './screens/DetailAlbum/DetailAlbum'
import Home from './screens/Home/Home'
import PaginaNotFound from './screens/PaginaNotFound/PaginaNotFound'
import ViewAll from './screens/ViewAll/ViewAll'
import FavsAlbum from './screens/FavsAlbum/FavsAlbum'
import FavsCanciones from './screens/FavsCanciones/FavsCanciones'


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/Detail/:id'} component={Detail} />
        <Route path={'/DetailAlbum/:id'} component={DetailAlbum} />
        <Route path={'/ViewAll'} component={ViewAll} />
        <Route path={'/FavsAlbum'} component={FavsAlbum} />
        <Route path={'/FavsCanciones'} component={FavsCanciones} />
        <Route path={''} component={PaginaNotFound} />
        <Route path={'/ViewAll'} component={ViewAll} />
      </Switch>
      <Footer/>
    </>
  );
}
export default App;


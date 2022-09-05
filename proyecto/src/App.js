import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Detail from './screens/Detail/Detail'
import Home from './screens/Home/Home'
import ViewAll from './screens/ViewAll/ViewAll'
import Favoritos from './screens/Favoritos/Favoritos'


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/Detail/:id'} component={Detail} />
        <Route path={'/ViewAll'} component={ViewAll} />
        <Route path={'/Favoritos'} component={Favoritos} />
      </Switch>
      <Footer/>
    </>
  );
}
export default App;

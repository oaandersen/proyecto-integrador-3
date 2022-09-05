import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Detail from './screens/Detail/Detail'
import Home from './screens/Home/Home'
import ViewAll from './screens/ViewAll/ViewAll'


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/Detail'} component={Detail} />
        <Route path={'/ViewAll'} component={ViewAll} />
      </Switch>
      <Footer/>
    </>
  );
}
export default App;

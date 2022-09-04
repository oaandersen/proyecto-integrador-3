import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import TopCanciones from './components/TopCanciones/TopCanciones';
import Home from './screens/Home/Home'


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/TopCanciones'} component={TopCanciones} />
      </Switch>
    </>
  );
}
export default App;

import React from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom';

import Certificados from './Pages/Certificados';
import Contato from './Pages/Contato';
import Sobre from './Pages/Sobre';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Curriculo from './Pages/Curriculo';
import NavBar from './Component/NavBar';


function App() {

  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="main">
        <div className="content-body">
          <Switch>
            <Route exact path="/sobre">
              <Sobre />
            </Route>
            <Route exact path="/contato" >
              <Contato />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/certificados">
              <Certificados />
            </Route>
            <Route exact path="/curriculo">
              <Curriculo />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

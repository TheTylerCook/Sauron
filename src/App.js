import React, { Component } from 'react';
import './App.css';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';




class App extends Component {
  render() {
    return (
      <HashRouter>
      <Switch>
        <Route exact path= '/' component = { Home }/>
        <Route path= '/Landing' component = { Landing }/>
        </Switch>
        </HashRouter>
    );
  }
}

export default App;

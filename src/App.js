import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import BookStore from './components/BookStore/BookStore'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path= '/' component = { Home }/>
        <Route path= '/Landing' component = { Landing }/>
        <Route path='/BookStore' component = { BookStore }/>
        </Switch>
        </BrowserRouter>
    );
  }
}

export default App;

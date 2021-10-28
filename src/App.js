import React, { Component } from 'react';
import Dashboard from './pages/Dashboard';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
     
<Switch>
<Route exact path="/">
  <Dashboard/>
  </Route>
  <Route exact path="/gallery">
  <Gallery/>
  </Route>
</Switch>
      
        </BrowserRouter>
      </div>
    )
  }
}

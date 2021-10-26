import React, { Component } from 'react';
import Dashboard from './pages/Dashboard';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
     
<Switch>
  <Route path="/">
  <Dashboard/>
  </Route>
</Switch>
      
        </BrowserRouter>
      </div>
    )
  }
}

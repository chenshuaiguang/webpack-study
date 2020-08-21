import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Route1 from "./route/router1"
import Error from "./route/error"
import Index from "./route/index"
import 'lib-flexible/flexible'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact  component={Index}></Route>
        <Route exact path="/route1" component={Route1}></Route>
        <Route  component={Error}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Route1 from "./route/router1"
import Error from "./route/error"
import Index from "./route/index"
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Route1></Route1>
      </header> */}
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Index}></Route>
        <Route path="/route1" component={Route1}></Route>
        <Route  component={Error}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

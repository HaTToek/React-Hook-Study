import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { Counter, Info, Home, ContextSample, Counter2, Info2, Average, Average2 } from './Pages'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
              <Home/>
              </Route>
              <Route path="/Counter">
                <Counter/>
              </Route>
              <Route path="/Info">
                <Info/>
              </Route>
              <Route path="/ContextSample">
                <ContextSample/>
              </Route>
              <Route path="/ContextSample">
                <ContextSample/>
              </Route>
              <Route path="/Counter2">
                <Counter2/>
              </Route>
              <Route path="/Info2">
                <Info2/>
              </Route>
              <Route path="/Average">
                <Average/>
              </Route>
              <Route path="/Average2">
                <Average2/>
              </Route>
            </Switch>
          </BrowserRouter>
      </div>
    )
  }
}
export default App;

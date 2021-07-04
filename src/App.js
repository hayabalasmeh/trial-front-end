import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Main from './components/Main';
import Home from './components/Home';
import FavoriteFood from './components/FavoriteFood';

import Footer from './components/Footer';

// import Main from './components/Main';


export class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/favoritefood'>
              <FavoriteFood />

            </Route>

          </Switch>
          <Footer />
        </Router>



      </div>
    )
  }
}

export default App


import React from 'react';
import './reset.scss';
import './App.css';
import Plot from "./components/Plot";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { createBrowserHistory } from 'history';
import * as firebase from 'firebase/app';
import config from "./config";

export const history = createBrowserHistory();

firebase.initializeApp(config.firebase);

class App extends React.Component {
  // {/*<div className='Root'>*/}
  render() {
    return (
      <Router history={history}>
        <div className='Root'>
          <NavBar/>
          <div className="App">
            {/*<div className="Sidepanz">*/}
            {/*  <Sidebar/>*/}
            {/*</div>*/}
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/users/:id" render={({ match }) => <Plot pairId={match.params.id} exact/>}/>
              </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

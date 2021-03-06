import React from 'react';
import './reset.scss';
import './App.css';
import EmoAnalytics from "./components/EmoAnalytics";
import NavBar from "./components/NavBar";
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
      <Router history={history} basename="/re-motion">
        <NavBar/>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/users/:id" render={({ match }) => <EmoAnalytics pairId={match.params.id} exact/>}/>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;

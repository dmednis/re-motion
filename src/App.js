import React from 'react';
import logo from './logo.svg';
import './App.css';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import config from './config';



class App extends React.Component {

    constructor(props) {
        super(props);
        firebase.initializeApp(config.firebase);
        this.db = firebase.firestore();
        this.state = {

        }
    }

    componentDidMount() {
        this.getData();
    };

    getData() {
      const ref = this.db.collection("user-pairs").doc("dAlSFMlR6bENZuno2bGJ").collection("user1").doc("22kKV9v41NpcUGc6bQe3");

      ref.get().then(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });

    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
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
                </header>
            </div>
        );
    }
}

export default App;

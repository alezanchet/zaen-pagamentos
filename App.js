import React from "react";

import firebase from "firebase";
import { Provider } from "react-redux";
import { store } from "./src/redux/redux";

import Home from "./src/pages/Home/Home.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticationReady: false,
      isAuthenticated: false
    };

    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAPQ2FksQMScaJ5lGheByeRHCSN_afx9d8",
        authDomain: "zaen-96773.firebaseapp.com",
        databaseURL: "https://zaen-96773.firebaseio.com/",
        projectId: "zaen-96773",
        storageBucket: "zaen-96773.appspot.com",
        messagingSenderId: "546360433886",
        appId: "1:546360433886:web:145fb0a69e29587afab64f"
      });
    }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = user => {
    this.setState({ isAuthenticationReady: true });
    this.setState({ isAuthenticated: !!user });
  };

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

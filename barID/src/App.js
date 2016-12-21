import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCNX4ny2Ox-sg0Kh939z7JhcWJ-k4Gd-uo',
      authDomain: 'barid-e20c4.firebaseapp.com',
      databaseURL: 'https://barid-e20c4.firebaseio.com',
      storageBucket: 'barid-e20c4.appspot.com',
      messagingSenderId: '485181044242'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

// CHANGE THE FIREBASE API TO OUR OWN CREDENTIALS

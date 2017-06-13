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
       apiKey: 'AIzaSyBOIKzB8_fRHOxftEGszW81Yu7uQ_0uSNk',
       authDomain: 'manager-ff19d.firebaseapp.com',
       databaseURL: 'https://manager-ff19d.firebaseio.com',
       projectId: 'manager-ff19d',
       storageBucket: 'manager-ff19d.appspot.com',
       messagingSenderId: '460019027980'
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

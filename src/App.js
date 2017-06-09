import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

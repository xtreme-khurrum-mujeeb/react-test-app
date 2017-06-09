/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Import a library to help create a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make Component
const Header = (props) => {
const { textStyle, viewStyle } = styles;

return (
  <View style={viewStyle}>
    <Text style={textStyle}>{ props.headText }</Text>
  </View>
);
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: 'papayawhip',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

// Make Component available to other parts of the app
export { Header };

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component, PropTypes } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './modules/ConnectedHomePage';
console.log('new store is');
console.log(store);
class Happy28 extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Happy28', () => Happy28);

import React, {Component, PropTypes} from 'react';
import * as auth0 from '../services/auth0';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class HomePage extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    currentUser: PropTypes.string
  }
  componentWillMount() {
    auth0.showLogin();
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome {this.props.currentUser}!
          祝生日快乐，心想事成！
          Happy 28th Birthday!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  div: {
    alignItems: 'flex-end'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

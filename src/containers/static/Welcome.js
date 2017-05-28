'use strict';

import React, { Component } from 'react';
import { Image, View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { StyleProvider, Button } from 'native-base';
import getTheme from '../../theme/components';
import * as actionCreators from '../../action_creators';
import Login from '../account/Login';


class Welcome extends Component {

  handleLogin() {
    requestAnimationFrame(() => {
      this.props.navigate({
        navigator: this.props.navigator,
        component: Login
      });
    });
  }

  render() {
    return (
      <StyleProvider style={getTheme()}>
        <View style={styles.container}>
          <Text>Welcome to React Native Starter Kit</Text>

          <Button common block
              style={{ marginTop: 30 }}
              onPress={this.handleLogin.bind(this)}>
            <Text style={{ color: "#FFF" }}>Giriş</Text>
          </Button>
        </View>
      </StyleProvider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  }
};


const _Wrapped = connect(
  (state) => ({ loading: state.get('loading') }),
  actionCreators
)(Welcome);

export default _Wrapped;

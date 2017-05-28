'use strict';

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import {
  StyleProvider,
  Content,
  Container,
  Spinner
  } from 'native-base';
import getTheme from '../../theme/components';
import * as actionCreators from '../../action_creators';
import Welcome from './Welcome';
import Main from './Main';
import { dummySplashScreenTimeout } from '../../fixtures';


class SplashScreen extends Component {

  componentDidMount() {
    let route = {
      navigator: this.props.navigator,
      component: {
        authanticated: {
          component: Main,
        },
        anonymous: {
          component: Welcome,
        }
      }
    };

    const navigator = this.props.navigator;
    this.props.setNavigator(navigator);

    setTimeout(function() {
      this.props.restoreAuth(route);
    }.bind(this), dummySplashScreenTimeout);

  }

  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Container style={{ backgroundColor: '#de0000' }}>
          <Content style={{ marginTop: 20 }}>
            <Spinner color="white" />
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const _Wrapped = connect(
  (state) => ({  }),
  actionCreators
)(SplashScreen);
export default _Wrapped;

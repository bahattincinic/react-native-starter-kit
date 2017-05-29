'use strict';

import React, { Component } from 'react';
import {
  StyleProvider,
  Content,
  Text,
  Button,
  ListItem,
  Left,
  Body,
  View
} from 'native-base';
import { connect } from 'react-redux';
import getTheme from '../../theme/components';
import Toolbar from '../../components/toolbar';
import * as actionCreators from '../../action_creators';
import Welcome from '../static/Welcome';


class User extends Component {

  handleLogout() {
    this.props.logout({
      navigator: this.props.navigator,
      component: Welcome,
      reset: true
    });
  }

  render() {
    return (
      <StyleProvider  style={getTheme()}>
        <Toolbar
          title={'User Profile'}
          navigator={this.props.navigator}
          openSidebar={this.props.openSidebar}
        >
          <Content style={{ padding: 10 }}>
            <ListItem>
              <Left>
                  <Text>Username</Text>
              </Left>
              <Body>
                <Text>{this.props.user.username}</Text>
              </Body>
            </ListItem>

            <View style={{ marginBottom: 10 }} />

            <Button red block marxFormElement
                onPress={this.handleLogout.bind(this)}>
              <Text>Logout</Text>
            </Button>
          </Content>
        </Toolbar>
      </StyleProvider>
    );
  }
}


const _Wrapped = connect(
  (state) => ({ user: state.get('user') }),
  actionCreators
)(User);

export default _Wrapped;

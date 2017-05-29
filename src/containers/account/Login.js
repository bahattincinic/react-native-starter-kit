'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleProvider, Form, Item, Input, Label, Button, Text, View, Content
} from 'native-base';
import getTheme from '../../theme/components';
import Toolbar from '../../components/toolbar';
import * as actionCreators from '../../action_creators';
import Main from '../static/Main';
import type { State } from '../../types';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      passwd: null,
    };
  }

  handleLogin() {
    requestAnimationFrame(() => {
      this.props.login(
        this.state.username,
        this.state.passwd,
        {
          navigator: this.props.navigator,
          component: Main,
          reset: true
        }
      );
    });
  }

  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Toolbar
          title="Login"
          showSideBar={false}
          navigator={this.props.navigator}
          openSidebar={this.props.openSidebar}
        >
          <Content>
            <Form>
              <Item floatingLabel marxFormElement >
                <Label>Username</Label>
                <Input
                  onChangeText={(username) => this.setState({username})}
                  value={this.state.username}
                />
              </Item>
              <Item floatingLabel marxFormElement >
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  onChangeText={(passwd) => this.setState({passwd})}
                  value={this.state.passwd}
                />
              </Item>

              <View style={{ marginBottom: 30 }} />

              <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Button red common block marxFormElement
                    onPress={this.handleLogin.bind(this)}>
                  <Text>Login</Text>
                </Button>
              </View>
            </Form>
          </Content>
        </Toolbar>
      </StyleProvider>
    );
  }
}


const _Wrapped = connect(
  (state: State) => ({ loading: state.get('loading')
                     }),
  actionCreators
)(Login);

export default _Wrapped;

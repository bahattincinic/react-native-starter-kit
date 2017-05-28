// @flow
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleProvider, Content, Text } from 'native-base';
import Toolbar from '../../components/toolbar';
import getTheme from '../../theme/components';
import * as actionCreators from '../../action_creators';
import type {
  State
} from '../../types';


class Main extends Component {

  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Toolbar
          title={"Dashboard"}
          navigator={this.props.navigator}
          openSidebar={this.props.openSidebar}>
          <Content>
            <Text style={{ marginLeft: 30, marginTop: 40 }}>
              React Native Starter Kit Dashboard
            </Text>
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
)(Main);

export default _Wrapped;

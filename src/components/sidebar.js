import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Content, Text, ListItem, Left, Body, StyleProvider, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';
import getTheme from '../theme/components';

import Main from '../containers/static/Main';
import User from '../containers/account/User';


class SidebarItem extends Component {
  defaultProps = {
    onPress: () => {}
  }

  render() {
    return (
      <ListItem noBorder icon onPress={this.props.onPress}>
        <Left>
          <Icon name={this.props.icon} size={30} style={styles.item}/>
        </Left>
        <Body noBorder>
          <Text style={styles.item}>{this.props.title}</Text>
        </Body>
      </ListItem>
    );
  }
}


class Sidebar extends Component {

  handlePress(component, params) {
    requestAnimationFrame(() => {
      this.props.closeSidebar();
      this.props.navigate({
        navigator: this.props.navigator,
        component: component,
        params: params || {}
      });
    });
  }

  render() {
    const user = this.props.user || {};
    return (
      <StyleProvider style={getTheme()}>
        <Content style={{ backgroundColor: '#de0000', padding: 20, paddingTop: 50}}>
          <SidebarItem title={user.username} icon="ios-person"
            onPress={
              this.handlePress.bind(this, User, {user: user})
          }/>
          <SidebarItem title="Dashboard" icon="home"
            onPress={
              this.handlePress.bind(this, Main)
          }/>

        </Content>
      </StyleProvider>
    );
  }
}

const styles = {
  item: {
    color: 'white',
  }
};


const _Sidebar = connect(
  (state) => ({user: state.get('user')}),
  actionCreators
)(Sidebar);

export default _Sidebar;

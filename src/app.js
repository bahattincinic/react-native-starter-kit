'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  BackAndroid,
  StatusBar
} from 'react-native';
import { Drawer } from 'native-base';
import { makeStore } from './store';
import { connect, Provider } from 'react-redux';
import * as actionCreators from './action_creators';
import SplashScreen from './containers/static/SplashScreen';
import SideBar from './components/sidebar';
import { Navigator } from 'react-native-deprecated-custom-components';


BackAndroid.addEventListener('hardwareBackPress', function() {
  if (scopeNavigator && scopeNavigator.getCurrentRoutes().length > 1) {
    scopeNavigator.pop();
    return true;
  }
  return false;
});


class StkMobile extends Component {

  openSidebar() {
    this._drawer._root.open();
  }

  closeSidebar() {
    this._drawer._root.close();
  }

  renderScene( route, navigator ) {
    let params = {};
    let Component = route.component;

    if ( route.params ) {
      params = route.params;
    }

    if ( route.component ) {
      return (
        <Drawer
            ref={(ref) => { this._drawer = ref; }}
            content={<SideBar navigator={navigator} closeSidebar={this.closeSidebar.bind(this)} />}
            onClose={() => this.closeSidebar()}>
          <View style={ styles.main }>
            <StatusBar
              hidden={route.statusBarHidden}
              barStyle="light-content"
            />
            <Component
              navigator={ navigator }
              style={ styles.content }
              openSidebar={this.openSidebar.bind(this)}
              closeSidebar={this.closeSidebar.bind(this)}
              params={params}/>
          </View>
        </Drawer>
      );
    }
  }

  render() {
    return (
      <Provider store={ store }>
        <Navigator
          ref={(nav) => { scopeNavigator = nav; }}
          initialRoute={ { component: SplashScreen } }
          configureScene={
            () => { return Navigator.SceneConfigs.FloatFromRight; }
          }
          renderScene={ this.renderScene.bind( this ) } />
      </Provider>
    );
  }
}

let store = makeStore();
let scopeNavigator;
let styles = StyleSheet.create( {
  main: {
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'column'
  }
} );

export default StkMobile;

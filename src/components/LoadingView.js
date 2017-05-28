'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';


class LoadingView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Spinner color="black" style={styles.spinner} />
      </View>
    );
  } 
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#CCC',
    opacity: 0.5
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default LoadingView;

// @flow
'use strict';

import { Toast } from 'native-base';
import {AsyncStorage} from 'react-native';
import * as actionCreators from '../action_creators';
import Settings from '../settings';
import { dummyUser, dummyToken, dummyLogin } from '../fixtures';
import type { Action, LOGIN } from '../types';


async function checkLogin(store, next: Function, action: LOGIN) {
  try {
    await store.dispatch(actionCreators.startLoading());

    const passwd: string = action.passwd;
    const username: string = action.username;
    if (username === dummyLogin.username && passwd === dummyLogin.password) {
      await AsyncStorage.setItem(
        Settings.session_key, dummyToken
      );

      action.token = dummyToken;
      action.user = dummyUser;

      await store.dispatch(actionCreators.navigate(action.route));
    } else {
      Toast.show({
        type: 'danger',
        position: 'bottom',
        buttonText: 'OK',
        duration: 4000,
        text: 'Invalid username or password'
      });
    }
    next(action);
  } finally {
    await store.dispatch(actionCreators.finishLoading());
  }
}


export default store => next => (action: Action) => {
  if (action.type === 'LOGIN') {
    return checkLogin(store, next, action);
  }
  return next(action);
};

'use strict';

import { Toast } from 'native-base';
import { AsyncStorage } from 'react-native';
import * as actionCreators from '../action_creators';
import Settings from '../settings';
import type {Action, LOGOUT} from '../types';


async function removeStore(store, next: Function, action: LOGOUT) {
  await AsyncStorage.removeItem(Settings.session_key);

  let route = action.route;

  route && await store.dispatch(actionCreators.navigate(route));
  next(action);
}

export default store => (next: Function) => (action: Action) => {
  if (action.type === 'LOGOUT') {
    return removeStore(store, next, action);
  }
  return next(action);
};

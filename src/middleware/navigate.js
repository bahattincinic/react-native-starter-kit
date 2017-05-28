// @flow
'use strict';

import * as actionCreators from '../action_creators';
import type {Action, NAVIGATE_TO} from '../types';


function doNavigate(store, next, action: NAVIGATE_TO) {
  let route = action.route;
  const state = store.getState();
  const navigator = state.get('navigator');

  if (navigator && route.component) {
    let context = {
      component: route.component,
      params: route.params,
    };

    if (route.hasOwnProperty('reset') && route.reset === true) {
      navigator.immediatelyResetRouteStack([context]);
    } else {
      navigator.push(context);
    }
  }
}


export default store => (next: Function) => (action: Action) => {
  if (action.type === 'NAVIGATE_TO') {
    return doNavigate(store, next, action);
  }
  return next(action);
};

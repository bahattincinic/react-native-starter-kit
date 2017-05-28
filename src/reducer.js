// @flow
'use strict';

import * as core from './core';
import type { State, Action } from './types';


export function reducer( state: State = core.InitialState, action: Action ): State {
  switch (action.type) {
    case 'LOGIN':
      return core.login( state, action.token, action.user );
    case 'LOGOUT':
      return core.logout( state );
    case 'RESTORE_AUTH':
      return core.restoreAuth( state, action.token, action.user );
    case 'START_LOADING':
      return core.startLoading(state);
    case 'FINISH_LOADING':
      return core.finishLoading(state);
    case 'INTERNET_CONNECTION':
      return core.changeInternetConnectionStatus(state, action.status);
    case 'SET_NAVIGATOR':
      return core.setNavigator(state, action.navigator);
  }

  return state;
}

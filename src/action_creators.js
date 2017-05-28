// @flow
'use strict';

import type { LOGIN
            , LOGOUT
            , RESTORE_AUTH
            , START_LOADING
            , FINISH_LOADING
            , CHANGE_CONNECTION_STATUS
            , } from './types';
import {dummyUser, dummyToken} from './fixtures';

export const setNavigator = (navigator: any) => (
  { type: 'SET_NAVIGATOR'
  , navigator: navigator
  }
);

export const navigate = (route: ?Object) => (
  { type: 'NAVIGATE_TO'
  , route: route
  }
);

export const login = (username: string, passwd: string, route: Object): LOGIN => (
  { type: 'LOGIN'
  , username: username
  , passwd: passwd
  , user: dummyUser
  , token: dummyToken
  , route: route
  }
);

export const logout = (route: ?Object): LOGOUT => (
  { type: 'LOGOUT'
  , route: route
  }
);

export const restoreAuth = (route: ?Object = null): RESTORE_AUTH => (
  { type: 'RESTORE_AUTH'
  , route: route
  , token: dummyToken
  , user: dummyUser
  }
);

export const startLoading = (): START_LOADING => (
  { type: 'START_LOADING' }
);

export const finishLoading = (): FINISH_LOADING => (
  { type: 'FINISH_LOADING' }
);


export const changeInternetConnectionStatus = (status: boolean): CHANGE_CONNECTION_STATUS => (
  { type: 'INTERNET_CONNECTION'
  , status: status
  }
);

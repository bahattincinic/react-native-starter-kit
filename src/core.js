/**
 * @flow
 */
'use strict';

import { Record } from 'immutable';
import type { State, User } from './types';
import { events} from './fixtures';

const StateRecord = Record(
  { loading: false
  , accessToken: undefined
  , loggedIn: false
  , user: undefined
  , events: []
  , navigator: null
  }
);

export const InitialState: State = new StateRecord({ user: {}
                                                   , newsfeed: feeds
                                                   , featuredEvents: events
                                                   , events: events
                                                   , stats: stats
                                                   });

export function setNavigator(state: State, navigator: any): State {
  return state.set('navigator', navigator);
}

export function login(state: State, token: string, user: User): State {
  return state
    .set('accessToken', token)
    .set('loggedIn', true)
    .set('user', user);
}

export function restoreAuth(state: State, token: string, user: User): State {
    return state
      .set('accessToken', token)
      .set('loggedIn', true)
      .set('user', user);
}

export function logout(state: State): State {
  // mark user as logged out
  return state
    .set('loggedIn', false)
    .set('accessToken', null)
    .set('user', {});
}

export function startLoading(state: State): State {
  // set state as loading
  return state.set('loading', true);
}

export function finishLoading(state: State): State {
  return state.set('loading', false);
}

export function changeInternetConnectionStatus(state: State, status: boolean): State {
  return state.set('isOnline', status);
}

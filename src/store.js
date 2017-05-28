'use strict';

import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import loginMiddleware from './middleware/login';
import navigateMiddleware from './middleware/navigate';
import restoreAuthMiddleware from './middleware/restore_auth';
import logoutMiddleware from './middleware/logout';


const middleware = [
  loginMiddleware,
  navigateMiddleware,
  restoreAuthMiddleware,
  logoutMiddleware,
];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');

  middleware.push(logger);
}


export function makeStore() {
  const createUsingMiddleware = applyMiddleware(
    ...middleware
  )( createStore );
  return createUsingMiddleware( reducer );
}

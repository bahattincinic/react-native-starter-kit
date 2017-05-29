// @flow

import type { User } from './types';

export const dummyUser: User = {
  username: 'John Doe',
  password: 'demo',
};

export const dummyToken: string = 'Test token';

export const dummyLogin: User = { username : 'demo'
                                , password: 'demo'
                                };

export const dummySplashScreenTimeout = 3000;

// @flow

import type { User, Newsfeed, Event, DashboardStats } from './types';

export const dummyUser: User = {
  username: 'John Doe',
  password: 'demo',
};

export const dummyToken: string = 'Test token';

export const dummyLogin: User = { username : 'demo'
                                , phone: '+90 532 245 43 44'
                                , password: 'demo'
                                , last_active: 'today'
                                , status: 'working'
                                , thumbnail: require('./images/initial/profile.jpg')
                                };

export const dummySplashScreenTimeout = 3000;

export const events: Array<Event> = [
  {
    date: '19/05/2017',
    title: 'Genel Kurul',
    location: 'Bakirköy'
  },
  {
    date: '20/05/2017',
    title: 'Başkanlık Seçimi',
    location: 'Bakirköy'
  },
  {
    date: '21/05/2017',
    title: 'Trabzonspor Toplantısı',
    location: 'Bakirköy'
  }
];

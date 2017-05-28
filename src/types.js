/**
 * @flow
 */

import type { Record as RecordType } from 'immutable';

export type Dispatch = Function;

export type User = {| username: string
                   ,  password: string
                   |}

export type LOGIN = {| type: 'LOGIN'
                     , token: string
                     , user: User
                     , username: string
                     , passwd: string
                     , route: ?Object
                     |}

export type LOGOUT = {| type: 'LOGOUT', route: ?Object |}

export type RESTORE_AUTH = {| type: 'RESTORE_AUTH'
                            , token: string
                            , user: User
                            , route: ?Object
                            |}

export type START_LOADING = {| type: 'START_LOADING' |}

export type FINISH_LOADING = {| type: 'FINISH_LOADING' |}

export type NAVIGATE_TO = {| type: 'NAVIGATE_TO', route: ?Object |}

export type CHANGE_CONNECTION_STATUS = {| type: 'INTERNET_CONNECTION'
                                        , status: boolean
                                        |}

export type SET_NAVIGATOR = {| type: 'SET_NAVIGATOR'
                             , navigator: any
                             |}

export type Action = LOGIN
                   | LOGOUT
                   | RESTORE_AUTH
                   | START_LOADING
                   | FINISH_LOADING
                   | NAVIGATE_TO
                   | CHANGE_CONNECTION_STATUS
                   | SET_NAVIGATOR

export type AppState = {| loading: boolean
                       ,  accessToken: ?string
                       ,  user: ?Object
                       ,  isOnline: boolean
                       ,  loggedIn: boolean
                       ,  navigator: any
                       |}

export type State = RecordType<AppState>;

import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const signup = () => dispatch => (
  SessionApiUtil.signup()
    .then((user) => dispatch({
      type: RECEIVE_CURRENT_USER,
      user
    })
  )
);

export const login = (userUtil) => dispatch => (
  SessionApiUtil.login(userUtil)
  .then((user) => dispatch({
    type: RECEIVE_CURRENT_USER,
    user
  }))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
  .then(() => dispatch({
    type: LOGOUT_CURRENT_USER
  }))
);

import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

export const removeSessionErrors = () => {
  return {
    type: REMOVE_SESSION_ERRORS
  };
};

export const signup = (user1) => dispatch => (
  SessionApiUtil.signup(user1)
    .then(
      (user) => dispatch({
        type: RECEIVE_CURRENT_USER,
        user
      }),
      (error) => dispatch({
        type: RECEIVE_SESSION_ERRORS,
        errors: error.responseJSON
      })
  )
);

export const login = (userUtil) => dispatch => (
  SessionApiUtil.login(userUtil)
    .then(
      (user) => dispatch({
        type: RECEIVE_CURRENT_USER,
        user
      }),
      (error) => dispatch({
        type: RECEIVE_SESSION_ERRORS,
        errors: error.responseJSON
      })
  )
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
  .then(() => dispatch({
    type: LOGOUT_CURRENT_USER
  }))
);

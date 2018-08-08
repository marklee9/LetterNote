import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/sessions_actions';

const defaultState = {
  currentUserId: null
};

const SessionReducer = (oldState = {}, action) => {

  // Object.freeze will make object immutable.
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.user.id };
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return defaultState;
  }
};

export default SessionReducer;
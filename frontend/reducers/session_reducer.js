import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER,
  RECEIVE_NEW_USER,
} from '../actions/sessions_actions';

const defaultState = Object.freeze({ currentUserId: null });

export default (oldState = defaultState, action) => {
  Object.freeze(oldState);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {currentUserId: action.user.id});
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return oldState;
  }
};

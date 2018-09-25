import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  DELETE_NOTEBOOK
} from '../../actions/notebooks_action';
import {
  merge
} from 'lodash';
import { LOGOUT_CURRENT_USER } from '../../actions/sessions_actions';


export default (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      return merge({}, oldState, action.notebooks);
    case RECEIVE_NOTEBOOK:
      return merge({}, oldState, {
        [action.notebook.id]: action.notebook
      });
    case DELETE_NOTEBOOK:
      let newState = merge({}, oldState);
      delete newState[action.payload.notebook.id];
      return newState;
      
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};
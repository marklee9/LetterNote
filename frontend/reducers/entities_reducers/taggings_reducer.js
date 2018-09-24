import merge from 'lodash/merge';

import {
  RECEIVE_ALL_TAGGINGS,
  RECEIVE_TAGGING,
  DELETE_TAGGING
} from '../../actions/taggings_actions';
import { REMOVE_TAG } from '../../actions/tags_actions';
import {
  LOGOUT_CURRENT_USER
} from '../../actions/sessions_actions';

const taggingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  
  switch (action.type) {
    case RECEIVE_ALL_TAGGINGS:
      return action.taggings;

    case RECEIVE_TAGGING:
      return merge({}, oldState, { [action.tagging.id]: action.tagging });

    case DELETE_TAGGING:
      let newState = merge({}, oldState);
      delete newState[action.taggingId];
      return newState;

    case REMOVE_TAG:
      let state = merge({}, oldState);
      Object.values(state).forEach(tagging => {
        if (tagging.tag_id === action.tagId) {
          delete state[tagging.id];
        }
      });
      return state;

    case LOGOUT_CURRENT_USER:
      return {};
      
    default:
      return oldState;
  }
};

export default taggingsReducer;
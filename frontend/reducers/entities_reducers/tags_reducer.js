import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG,
  RECEIVE_TAGGING,
} from "../actions/tag_actions";
import merge from "lodash/merge";
import { LOGOUT_CURRENT_USER } from '../../actions/sessions_actions';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      newState = merge({}, state);
      newState[action.tag.id] = action.tag;
      return newState;
    case REMOVE_TAG:
      newState = merge({}, state);
      delete newState[action.tag.id];
      return newState;
    case RECEIVE_TAGGING:
      newState = merge({}, state);
      if (!newState[action.tagging.tag.id]) {
        newState[action.tagging.tag.id] = action.tagging.tag;
      }
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default tagsReducer;
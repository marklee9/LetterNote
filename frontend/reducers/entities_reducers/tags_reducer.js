import {
  RECEIVE_TAGS,
} from '../../actions/tags_actions';
import { merge } from 'lodash';
import { LOGOUT_CURRENT_USER } from '../../actions/sessions_actions';


export default (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_TAGS:
      return merge({}, oldState, action.tags);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};
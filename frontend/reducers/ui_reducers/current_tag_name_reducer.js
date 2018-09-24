import {
  CURRENT_TAG
} from '../../actions/tags_actions';
import {
  LOGOUT_CURRENT_USER
} from '../../actions/sessions_actions';

export default function currentTagNameReducer(state = null, action) {
  switch (action.type) {
    case CURRENT_TAG:
      return action.currentTagName;
    case LOGOUT_CURRENT_USER:
      return null;
    default:
      return state;
  }
}
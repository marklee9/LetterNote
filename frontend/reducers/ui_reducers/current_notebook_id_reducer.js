import {
  CURRENT_NOTEBOOK
} from '../../actions/notebooks_action';
import {
  LOGOUT_CURRENT_USER
} from '../../actions/sessions_actions';

export default function currentNotebookIdReducer(state = null, action) {
  switch (action.type) {
    case CURRENT_NOTEBOOK:
      return action.currentNotebookId;
    case LOGOUT_CURRENT_USER:
      return null;
    default:
      return state;
  }
}
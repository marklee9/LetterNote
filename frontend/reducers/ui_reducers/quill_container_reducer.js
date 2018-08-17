import {
  NEW_QUILL,
  EDIT_QUILL,
  RESET_QUILL
} from '../../actions/quill_actions';

import { DELETE_NOTE, RECEIVE_NOTE } from '../../actions/note_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/sessions_actions';

export default function workingNoteIdReducer(state = null, action) {
  switch (action.type) {
    case NEW_QUILL:
      return 'new';
    case EDIT_QUILL:
      return 'edit';
    case DELETE_NOTE:
      return null;
    case RESET_QUILL:
      return null;
    case LOGOUT_CURRENT_USER:
      return null;
    default:
      return state;
  }
}

import { WORKING_NOTE,CLOSE_WORKING_NOTE } from '../../actions/note_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/sessions_actions';


export default function workingNoteIdReducer(state = null, action) {
  switch (action.type) {
    case WORKING_NOTE:
      return action.workingNote;
    case CLOSE_WORKING_NOTE:
      return null;
    case LOGOUT_CURRENT_USER:
      return null;
    default: 
      return state;
  }
}
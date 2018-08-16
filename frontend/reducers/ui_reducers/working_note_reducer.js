import { WORKING_NOTE,CLOSE_WORKING_NOTE } from '../../actions/note_actions';

export default function workingNoteIdReducer(state = null, action) {
  switch (action.type) {
    case WORKING_NOTE:
      return action.workingNote;
    case CLOSE_WORKING_NOTE:
      return null;
    default: 
      return state;
  }
}
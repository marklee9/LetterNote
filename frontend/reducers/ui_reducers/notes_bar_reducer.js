import { OPEN_NOTESBAR, CLOSE_NOTESBAR } from '../../actions/notes_bar_actions';
export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_NOTESBAR:
      return action.notesBar;
    case CLOSE_NOTESBAR:
      return null;
    default:
      return state;
  }
}
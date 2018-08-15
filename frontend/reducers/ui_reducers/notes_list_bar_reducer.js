import {
  OPEN_NOTELISTBAR,
  CLOSE_NOTELISTBAR
} from '../../actions/notes_list_bar_actions';
export default function notebarReducer(state = null, action) {
  switch (action.type) {
    case OPEN_NOTELISTBAR:
      return true;
    case CLOSE_NOTELISTBAR:
      return null;
    default:
      return state;
  }
}
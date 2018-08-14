import { OPEN_NOTEBAR, CLOSE_NOTEBAR } from '../../actions/notes_bar_actions';
export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_NOTEBAR:
      return true;
    case CLOSE_NOTEBAR:
      return null;
    default:
      return state;
  }
}
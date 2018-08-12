import { OPEN_NOTEBOOKS, CLOSE_NOTEBOOKS } from '../../actions/sidebar_actions';

export default function modalReducer(state = false, action) {
  switch (action.type) {
    case OPEN_NOTEBOOKS:
      return true;
    case CLOSE_NOTEBOOKS:
      return false;
    default:
      return state;
  }
}
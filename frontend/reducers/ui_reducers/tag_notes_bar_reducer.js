import {
  OPEN_TAGNOTEBAR,
  CLOSE_TAGNOTEBAR
} from '../../actions/tag_notes_bar_actions';
export default function tagnotebarReducer(state = null, action) {
  switch (action.type) {
    case OPEN_TAGNOTEBAR:
      return true;
    case CLOSE_TAGNOTEBAR:
      return null;
    default:
      return state;
  }
}
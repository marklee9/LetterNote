import {
  RECEIVE_NOTE_ERRORS,
  RECEIVE_NOTE
} from '../../actions/note_actions';
import {
  CLOSE_MODAL
} from '../../actions/modal_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTE_ERRORS:
      return action.errors;
    case RECEIVE_NOTE:
      return [];
    default:
      return state;
  }
};

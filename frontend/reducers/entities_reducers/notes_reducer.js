import { RECEIVE_NOTES, RECEIVE_NOTE, DELETE_NOTE } from '../../actions/note_actions';
import { merge } from 'lodash';

export default (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_NOTES:
      return merge({}, oldState, action.notes);

    case RECEIVE_NOTE:
      return merge({}, oldState, {
        [action.note.id]: action.note
      });

    case DELETE_NOTE:
      let newState = merge({}, oldState);
      delete newState[action.noteId];
      return newState;

    default:
      return oldState;
  }
};
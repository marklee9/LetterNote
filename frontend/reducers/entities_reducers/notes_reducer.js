import { RECEIVE_NOTES, RECEIVE_NOTE, DELETE_NOTE } from '../../actions/note_actions';
import { merge } from 'lodash';
import { DELETE_NOTEBOOK } from '../../actions/notebooks_action';
import { LOGOUT_CURRENT_USER } from '../../actions/sessions_actions';


export default (oldState = {}, action) => {
  Object.freeze(oldState);
let newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_NOTES:
      return merge({}, oldState, action.notes);

    case RECEIVE_NOTE:
      return merge({}, oldState, {
        [action.note.id]: action.note
      });

    case DELETE_NOTEBOOK:
      action.payload.notes.forEach((id) => delete newState[id]);
      return newState;
      
    case DELETE_NOTE:
      delete newState[action.noteId];
      return newState;

    case LOGOUT_CURRENT_USER:
      return {};

    default:
      return oldState;
  }
};
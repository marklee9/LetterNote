import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  DELETE_NOTEBOOK
} from '../../actions/notebooks_action';
import {
  merge
} from 'lodash/merge';

const initialState = Object.freeze({
  notes: null
});

export default (oldState = initialState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      return merge({}, oldState, action.notes);
    case RECEIVE_NOTEBOOK:
      return merge({}, oldState, {
        [action.note.id]: action.note
      });
    case DELETE_NOTEBOOK:
      let newState = merge({}, oldState);
      delete newState[action.noteId];
      return newState;
    default:
      return oldState;
  }
};
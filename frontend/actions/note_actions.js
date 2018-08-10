import * as NoteApiUtil from '../util/notebook_api_util';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const RECEIVE_NOTE_ERRORS = 'RECEIVE_NOTE_ERRORS';

export const fetchNotes = () => dispatch => (
  NoteApiUtil.fetchNotes()
  .then(
    (notes) => dispatch({
      type: RECEIVE_NOTES,
      notes
    })
  )
);

export const fetchNote = (id) => dispatch => (
  NoteApiUtil.fetchNote(id)
  .then(
    (note) => dispatch({
      type: RECEIVE_NOTE,
      note
    }),
    (error) => dispatch({
      type: RECEIVE_NOTE_ERRORS,
      errors: error.responseJSON
    })
  )
);

export const createNote = (noteAPI) => dispatch => (
  NoteApiUtil.createNote(noteAPI)
  .then(
    (note) => dispatch({
      type: RECEIVE_NOTE,
      note
    }),
    (error) => dispatch({
      type: RECEIVE_NOTE_ERRORS,
      errors: error.responseJSON
    })
  )
);

export const updateNote = (noteAPI) => dispatch => (
  NoteApiUtil.updateNote(noteAPI)
  .then(
    (note) => dispatch({
      type: RECEIVE_NOTE,
      note
    }),
    (error) => dispatch({
      type: RECEIVE_NOTE_ERRORS,
      errors: error.responseJSON
    })
  )
);

export const deleteNote = (id) => dispatch => (
  NoteApiUtil.deleteNote(id)
  .then(
    (note) => dispatch({
      type: DELETE_NOTE,
      noteId: id
    }),
    (error) => dispatch({
      type: RECEIVE_NOTE_ERRORS,
      errors: error.responseJSON
    })
  )
);

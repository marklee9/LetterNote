import * as NoteApiUtil from '../util/note_api_util';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const RECEIVE_NOTE_ERRORS = 'RECEIVE_NOTE_ERRORS';
export const WORKING_NOTE = 'WORKING_NOTE';
export const CLOSE_WORKING_NOTE = 'CLOSE_WORKING_NOTE';

export const fetchWorkingNote = note => {
  return {
    type: WORKING_NOTE,
    workingNote: note.id,
  };
};

export const closeWorkingNote = () => {
  return {
    type: CLOSE_WORKING_NOTE,
  };
};

export const fetchNotes = () => dispatch => (
  NoteApiUtil.fetchNotes()
  .then(
    (notes) => dispatch({
      type: RECEIVE_NOTES,
      notes
    }),
    (error) => dispatch({
      type: RECEIVE_NOTE_ERRORS,
      errors: error.responseJSON
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

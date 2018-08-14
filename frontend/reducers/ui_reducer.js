import { combineReducers } from 'redux';
import modalReducer from './ui_reducers/modal_reducer';
import NotesBarReducer from './ui_reducers/notes_bar_reducer';

export default combineReducers({
  modal: modalReducer,
});
// notesBar: NotesBarReducer

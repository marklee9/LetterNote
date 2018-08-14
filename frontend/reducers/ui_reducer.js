import { combineReducers } from 'redux';
import modalReducer from './ui_reducers/modal_reducer';
import CurrentNotebookReducer from './ui_reducers/current_notes_reducer';
import NotesBarReducer from './ui_reducers/notes_bar_reducer';


export default combineReducers({
  modal: modalReducer,
  currentNotebook: CurrentNotebookReducer,
  notesBar: NotesBarReducer
});

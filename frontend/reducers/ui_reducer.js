import { combineReducers } from 'redux';
import modalReducer from './ui_reducers/modal_reducer';
import CurrentNotebookIdReducer from './ui_reducers/current_notebook_id_reducer';
import CurrentNotebookTitleReducer from './ui_reducers/current_notebook_title_reducer';
import NotesBarReducer from './ui_reducers/notes_bar_reducer';
import NotesListBarReducer from './ui_reducers/notes_list_bar_reducer';

export default combineReducers({
  modal: modalReducer,
  currentNotebookId: CurrentNotebookIdReducer,
  currentNotebookTitle: CurrentNotebookTitleReducer,
  notesBar: NotesBarReducer,
  notesListBar: NotesListBarReducer
});

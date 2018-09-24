import { combineReducers } from 'redux';
import modalReducer from './ui_reducers/modal_reducer';
import CurrentNotebookIdReducer from './ui_reducers/current_notebook_id_reducer';
import CurrentNotebookTitleReducer from './ui_reducers/current_notebook_title_reducer';
import NotesBarReducer from './ui_reducers/notes_bar_reducer';
import NotesListBarReducer from './ui_reducers/notes_list_bar_reducer';
import WorkingNoteReducer from './ui_reducers/working_note_reducer';
import QuillContainerReducer from './ui_reducers/quill_container_reducer';
import currentTagIdReducer from './ui_reducers/current_tag_id_reducer';
import currentTagNameReducer from './ui_reducers/current_tag_name_reducer';

export default combineReducers({
  modal: modalReducer,
  currentNotebookId: CurrentNotebookIdReducer,
  currentNotebookTitle: CurrentNotebookTitleReducer,
  currentTagId: currentTagIdReducer,
  currentTagName: currentTagNameReducer,
  notesBar: NotesBarReducer,
  notesListBar: NotesListBarReducer,
  workingNote: WorkingNoteReducer,
  quillContainer: QuillContainerReducer,
});

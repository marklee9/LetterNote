import { combineReducers } from 'redux';
import SessionErrorReducer from './error_reducers/session_error_reducer';
import NoteErrorReducer from './error_reducers/notes_error_reducer';
import NotebookErrorReducer from './error_reducers/notebooks_error_reducer';
import TagsErrorReducer from './error_reducers/tags_error_reducer';


export default combineReducers({
  session: SessionErrorReducer,
});

// notes: NoteErrorReducer,
// notebooks: NotebookErrorReducer,
// tags: TagsErrorReducer
import { combineReducers } from 'redux';
import NotesReducer from './entities_reducers/notes_reducer';
import NotebooksReducer from './entities_reducers/notebooks_reducer';
import TagsReducer from './entities_reducers/tags_reducer';
import TaggingsReducer from './entities_reducers/taggings_reducer';

export default combineReducers({
  notebooks: NotebooksReducer
});
// notes: NotesReducer,
// tags: TagsReducer,
// Taggings: TaggingsReducer
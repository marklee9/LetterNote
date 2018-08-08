import { combineReducers } from 'redux';
import UsersReducer from './entities_reducers/users_reducer';
import NotesReducer from './entities_reducers/notes_reducer';
import NotebooksReducer from './entities_reducers/notebooks_reducer';
import TagsReducer from './entities_reducers/tags_reducer';
import TaggingsReducer from './entities_reducers/taggings_reducer';

export default combineReducers({
  users: UsersReducer,
  notes: NotesReducer,
  notebooks: NotebooksReducer,
  tags: TagsReducer,
  Taggings: TaggingsReducer
});
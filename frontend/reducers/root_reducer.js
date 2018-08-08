import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
});

// entities: EntitiesReducer

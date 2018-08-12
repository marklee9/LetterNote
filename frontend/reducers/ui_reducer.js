import { combineReducers } from 'redux';
import modalReducer from './ui_reducers/modal_reducer';

export default combineReducers({
  modal: modalReducer,
});

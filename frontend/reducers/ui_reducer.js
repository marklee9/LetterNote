import { combineReducers } from 'redux';
import modalReducer from './ui_reducers/modal_reducer';
import sidebarReducer from './ui_reducers/sidebar_reducer';

export default combineReducers({
  modal: modalReducer,
  sidebar: sidebarReducer
});
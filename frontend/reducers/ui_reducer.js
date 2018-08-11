import {
  combineReducers
} from 'redux';

import filtersReducer from './ui_reducers/filter_reducer';
import modalReducer from './ui_reducers/modal_reducer';

export default combineReducers({
  filters: filtersReducer,
  modal: modalReducer
});
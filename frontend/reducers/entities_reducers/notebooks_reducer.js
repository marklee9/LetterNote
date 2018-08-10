import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK, 
  DELETE_NOTEBOOK
} from '../../actions/notebook_actions';
import { merge } from 'lodash/merge';

const initialState = Object.freeze({
  notebooks: null
});

export default (oldState = initialState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      return merge({}, oldState, action.notebooks);
    case RECEIVE_NOTEBOOK:
      return merge({}, oldState, {[action.notebook.id]:action.notebook});
    case DELETE_NOTEBOOK:
      let newState = merge({}, oldState);
      delete newState[action.notebookId];
      return newState;
    default:
      return oldState;
  }
};
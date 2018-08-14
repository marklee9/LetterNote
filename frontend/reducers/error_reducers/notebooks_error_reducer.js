import {
  RECEIVE_NOTEBOOK_ERRORS, RECEIVE_NOTEBOOK
} from '../../actions/notebooks_action';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTEBOOK_ERRORS:
      return action.errors;
    case RECEIVE_NOTEBOOK:
      return [];
    default:
      return state;
  }
};

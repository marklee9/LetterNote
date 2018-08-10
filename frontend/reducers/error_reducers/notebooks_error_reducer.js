import {
  RECEIVE_NOTEBOOK_ERRORS,
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  DELETE_NOTEBOOK,
} from '../../actions/notebook_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTEBOOK_ERRORS:
      return action.errors;
    default:
      return [];
  }
};

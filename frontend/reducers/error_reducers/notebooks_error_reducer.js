import {
  RECEIVE_NOTEBOOK_ERRORS,
} from '../../actions/notebooks_action';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTEBOOK_ERRORS:
      return action.errors;
    default:
      return [];
  }
};

import {
  RECEIVE_NOTEBOOK_ERRORS, RECEIVE_NOTEBOOK
} from '../../actions/notebooks_action';
import {
  CLOSE_MODAL
} from '../../actions/modal_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTEBOOK_ERRORS:
      return action.errors;
    case RECEIVE_NOTEBOOK:
      return [];
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
};

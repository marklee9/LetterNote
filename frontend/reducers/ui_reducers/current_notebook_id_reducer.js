import {
  CURRENT_NOTEBOOK
} from '../../actions/notebooks_action';
export default function currentNotebookIdReducer(state = null, action) {
  switch (action.type) {
    case CURRENT_NOTEBOOK:
      return action.currentNotebookId;
    default:
      return state;
  }
}
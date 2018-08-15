import {
  CURRENT_NOTEBOOK
} from '../../actions/notebooks_action';
export default function currentNotebookTitleReducer(state = null, action) {
  switch (action.type) {
    case CURRENT_NOTEBOOK:
      return action.currentNotebookTitle;
    default:
      return state;
  }
}
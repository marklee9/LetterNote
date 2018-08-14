import { CURRENT_NOTEBOOK } from '../../actions/notebooks_action';
export default function modalReducer(state = null, action) {
  switch (action.type) {
    case CURRENT_NOTEBOOK:
      return action.currentNotebook;
    default:
      return state;
  }
}
import { connect } from "react-redux";
import { fetchCurrentNotebook } from "../../../actions/notebooks_action";
import Notes from './notes';
import { selectNotes } from '../../../reducers/selector';

const msp = (state) => ({
  notes: selectNotes(state),
  currentNotebook: state.ui.currentNotebook,
  notesBar: state.ui.notesBar
});

const mdp = dispatch => ({
  fetchCurrentNotebook: (id) => dispatch(fetchCurrentNotebook(id))
});

export default connect(msp, mdp)(Notes);



// currentNotebook: state.ui.currentNotebook

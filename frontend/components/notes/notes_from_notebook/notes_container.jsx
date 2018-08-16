import { connect } from "react-redux";
import Notes from './notes';
import { selectNotes } from '../../../reducers/selector';

const msp = (state) => ({
  notes: selectNotes(state),
  currentNotebookId: state.ui.currentNotebookId,
  currentNotebookTitle: state.ui.currentNotebookTitle,
  notesBar: state.ui.notesBar
});

export default connect(msp, null)(Notes);


// fetchCurrentNotebook: (id) => dispatch(fetchCurrentNotebook(id))
// currentNotebook: state.ui.currentNotebook

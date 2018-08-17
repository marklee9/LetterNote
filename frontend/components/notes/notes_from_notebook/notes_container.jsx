import { connect } from "react-redux";
import Notes from './notes';
import { selectNotes } from '../../../reducers/selector';
import { 
  fetchNote, 
  fetchWorkingNote, 
  closeWorkingNote, 
  deleteNote 
} from "../../../actions/note_actions";
import { editQuill, resetQuill } from "../../../actions/quill_actions";

const msp = (state) => ({
  notes: selectNotes(state),
  currentNotebookId: state.ui.currentNotebookId,
  currentNotebookTitle: state.ui.currentNotebookTitle,
  notesBar: state.ui.notesBar
});

const mdp = dispatch => ({
	fetchWorkingNote: note => dispatch(fetchWorkingNote(note)),
	closeWorkingNote: () => dispatch(closeWorkingNote()),
	deleteNote: id => dispatch(deleteNote(id)),
	fetchNote: id => dispatch(fetchNote(id)),
	editQuill: () => dispatch(editQuill()),
	resetQuill: () => dispatch(resetQuill())
});

export default connect(msp, mdp)(Notes);


// fetchCurrentNotebook: (id) => dispatch(fetchCurrentNotebook(id))
// currentNotebook: state.ui.currentNotebook

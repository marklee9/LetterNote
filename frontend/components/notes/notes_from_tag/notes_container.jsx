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
  currentTagId: state.ui.currentTagId,
  currentTagName: state.ui.currentTagName,
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


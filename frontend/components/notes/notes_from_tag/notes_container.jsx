import { connect } from "react-redux";
import Notes from './notes';
import { selectNotesByTag } from "../../../reducers/selector";
import { 
  fetchNote, 
  fetchWorkingNote, 
  closeWorkingNote, 
  deleteNote 
} from "../../../actions/note_actions";
import { editQuill, resetQuill } from "../../../actions/quill_actions";
import { closeNoteBar } from "../../../actions/notes_bar_actions";
import { openModal } from "../../../actions/modal_actions";

const msp = state => ({
	notes: selectNotesByTag(state),
	currentTagId: state.ui.currentTagId,
	currentTagName: state.ui.currentTagName,
  tagNoteBar: state.ui.tagNoteBar
});

const mdp = dispatch => ({
	fetchWorkingNote: note => dispatch(fetchWorkingNote(note)),
	closeWorkingNote: () => dispatch(closeWorkingNote()),
	deleteNote: id => dispatch(deleteNote(id)),
	fetchNote: id => dispatch(fetchNote(id)),
	editQuill: () => dispatch(editQuill()),
	resetQuill: () => dispatch(resetQuill()),
	openModal: (field) => dispatch(openModal(field)),
	
});

export default connect(msp, mdp)(Notes);


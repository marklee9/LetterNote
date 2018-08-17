import Sidebar from './sidebar';
import { connect } from "react-redux";
import { logout } from '../../actions/sessions_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchNotes } from "../../actions/note_actions";
import { openNoteListBar, closeNoteListBar } from '../../actions/notes_list_bar_actions';
import { openNoteBar, closeNoteBar } from '../../actions/notes_bar_actions';
import { newQuill, resetQuill } from '../../actions/quill_actions';

const msp = (state) => ({
	currentUserId: state.session.currentUserId,
	notebooks: state.entities.notebooks,
  notes: state.entities.notes
});

const mdp = dispatch => ({
	fetchNotes: () => dispatch(fetchNotes()),
	logout: id => dispatch(logout(id)),
	openModal: modal => dispatch(openModal(modal)),
	closeModal: () => dispatch(closeModal()),
	openNoteListBar: () => dispatch(openNoteListBar()),
	closeNoteListBar: () => dispatch(closeNoteListBar()),
	openNoteBar: () => dispatch(openNoteBar()),
	closeNoteBar: () => dispatch(closeNoteBar()),
	newQuill: () => dispatch(newQuill()),
	resetQuill: () => dispatch(resetQuill())
});

export default connect(msp, mdp)(Sidebar);
import Sidebar from './sidebar';
import { connect } from "react-redux";
import { logout } from '../../actions/sessions_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchNotes } from "../../actions/note_actions";
import { openNoteListBar, closeNoteListBar } from '../../actions/notes_list_bar_actions';
import { openNoteBar, closeNoteBar } from '../../actions/notes_bar_actions';
import { newQuill, editQuill, resetQuill } from '../../actions/quill_actions';
import { createNote, fetchWorkingNote } from "../../actions/note_actions";
import { fetchTags } from '../../actions/tags_actions';

const msp = state => ({
	currentUserId: state.session.currentUserId,
	notebooks: state.entities.notebooks,
	notes: state.entities.notes,
	currentNotebookId: state.ui.currentNotebookId,
});

const mdp = dispatch => ({
	fetchTags: () => dispatch(fetchTags()),
	fetchNotes: () => dispatch(fetchNotes()),
	logout: id => dispatch(logout(id)),
	openModal: modal => dispatch(openModal(modal)),
	closeModal: () => dispatch(closeModal()),
	openNoteListBar: () => dispatch(openNoteListBar()),
	closeNoteListBar: () => dispatch(closeNoteListBar()),
	openNoteBar: () => dispatch(openNoteBar()),
	closeNoteBar: () => dispatch(closeNoteBar()),
	newQuill: () => dispatch(newQuill()),
	editQuill: () => dispatch(editQuill()),
	resetQuill: () => dispatch(resetQuill()),
	createNote: note => dispatch(createNote(note)),
	fetchWorkingNote: note => dispatch(fetchWorkingNote(note))
});

export default connect(msp, mdp)(Sidebar);
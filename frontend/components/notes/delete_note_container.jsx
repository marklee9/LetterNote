import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import DeleteNoteForm from "./delete_note_form";
import { deleteNote } from '../../actions/note_actions';
import { closeWorkingNote } from '../../actions/note_actions';

const msp = state => ({
  currentUserId: state.session.currentUserId,
  noteId: state.ui.workingNote,
  note: state.entities.notes[state.ui.workingNote]
});

const mdp = dispatch => ({
	deleteNote: noteId => dispatch(deleteNote(noteId)),
	closeModal: () => dispatch(closeModal()),
	openModal: modal => dispatch(openModal(modal)),
  closeWorkingNote: () => dispatch(closeWorkingNote())
});

export default connect(msp, mdp)(DeleteNoteForm);
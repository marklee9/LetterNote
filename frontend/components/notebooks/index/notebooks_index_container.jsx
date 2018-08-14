import { connect } from "react-redux";
import NotebooksIndex from './notebooks_index';
import { fetchNotebooks, deleteNotebook, updateNotebook, fetchCurrentNotebook } from '../../../actions/notebooks_action';
import { openModal, closeModal } from "../../../actions/modal_actions";
import { openNoteBar } from '../../../actions/notes_bar_actions';

const msp = (state) => ({
  notebooks: Object.values(state.entities.notebooks),
  errors: state.errors.notebooks
});


const mdp = dispatch => ({
	fetchNotebooks: () => dispatch(fetchNotebooks()),
	updateNotebook: notebook => dispatch(updateNotebook(notebook)),
	deleteNotebook: id => dispatch(deleteNotebook(id)),
	openModal: modal => dispatch(openModal(modal)),
	closeModal: () => dispatch(closeModal()),
	fetchCurrentNotebook: id => dispatch(fetchCurrentNotebook(id)),
	openNoteBar: () => dispatch(openNoteBar())
});

export default connect(	msp, mdp )(NotebooksIndex);

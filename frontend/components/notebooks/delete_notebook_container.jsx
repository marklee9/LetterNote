import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import DeleteNotebookForm from "./delete_notebook_form";
import { deleteNotebook } from '../../actions/notebooks_action';
import { closeWorkingNote } from '../../actions/note_actions';

const msp = state => ({
	currentUserId: state.session.currentUserId,
	notebookId: state.ui.currentNotebookId,
	notebookTitle: state.ui.currentNotebookTitle
});

const mdp = dispatch => ({
  deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId)),
	closeModal: () => dispatch(closeModal()),
	openModal: modal => dispatch(openModal(modal)),
	closeWorkingNote: () => dispatch(closeWorkingNote())
});

export default connect(msp, mdp)(DeleteNotebookForm);
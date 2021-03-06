import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import CreateNotebookForm from './create_notebook_form';
import { createNotebook } from '../../actions/notebooks_action';

const msp = state => ({
	currentUserId: state.session.currentUserId,
	errors: state.errors.notebooks
});

const mdp = dispatch => ({
	createNotebook: notebook => dispatch(createNotebook(notebook)),
	closeModal: () => dispatch(closeModal()),
	openModal: (modal) => dispatch(openModal(modal))
});

export default connect(	msp, mdp )(CreateNotebookForm);

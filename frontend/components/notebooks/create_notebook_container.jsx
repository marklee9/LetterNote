import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import CreateNotebookForm from './create_notebook_form';
import { createNotebook } from '../../actions/notebooks_action';
import React from "react";

const mdp = dispatch => ({
	createNotebook: (notebook) => dispatch(createNotebook(notebook)),
	closeModal: () => dispatch(closeModal())
});

export default connect(	null, mdp )(CreateNotebookForm);

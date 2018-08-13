import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import CreateNotebookForm from './create_notebook_form';
import { deleteNotebook } from '../../actions/notebooks_action';
import React from "react";

const msp = state => ({
  currentUserId: state.session.currentUserId,
  errors: state.errors.notebooks
});

const mdp = dispatch => ({
  deleteNotebook: (notebook) => dispatch(deleteNotebook(notebook)),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(CreateNotebookForm);

import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateNotebookContainer from '../notebooks/create_notebook_container';
import NotebookIndexContainer from '../notebooks/index/notebooks_index_container';
import TagsIndexContainer from "../tags/index/tags_index_container";
import CreateTagContainer from '../tags/create_tag_container';
import DeleteNoteContainer from '../notes/delete_note_container';
import DeleteNotebookContainer from '../notebooks/delete_notebook_container';

class Modal extends React.Component {
	constructor(props) {
		super(props);

    this.closeModal = this.closeModal.bind(this);
    this.closeAndOpenModal = this.closeAndOpenModal.bind(this);
	}

	closeModal() {
		let modal = document.getElementById("modal");
		modal.classList.add("animated");
		modal.classList.add("slideOutLeft");
		setTimeout(() => {
			this.props.closeModal();
		}, 600);
	}

  closeAndOpenModal() {
    this.props.closeModal();
    if (this.props.modal === "createNotebook") {
      this.props.openModal("notebookIndex");
    } else {
      this.props.openModal("tagIndex");
    }
  }

	render() {
		if (!this.props.modal) {
			return null;
		}

		let component;

		switch (this.props.modal) {
			case "createNotebook":
				component = <CreateNotebookContainer />;
				break;
			case "notebookIndex":
				component = <NotebookIndexContainer />;
				break;
			case "tagIndex":
				component = <TagsIndexContainer />;
				break;
			case "createTag":
				component = <CreateTagContainer />;
				break;
			case "deleteNote":
				component = <DeleteNoteContainer />;
				break;
			case "deleteNotebook":
				component = <DeleteNotebookContainer />;
				break;
			default:
				return null;
		}

		if (
			this.props.modal === "createNotebook" ||
			this.props.modal === "createTag" ||
			this.props.modal === "deleteNote" ||
			this.props.modal === "deleteNotebook"
		) {
			return (
				<div className="fade-modal-background animated fadeIn" onClick={this.closeAndOpenModal}>
					<div className="fade-modal-child" onClick={e => e.stopPropagation()}>
						{component}
					</div>
				</div>
			);
		}

		if (
			this.props.modal === "notebookIndex" ||
			this.props.modal === "tagIndex"
		) {
			return (
				<div className="slide-modal-background" onClick={this.closeModal}>
					<div
						id="modal"
						className="slide-modal-child animated slideInLeft"
						onClick={e => e.stopPropagation()}
					>
						{component}
					</div>
				</div>
			);
		}
	}
}

const msp = state => ({
  modal: state.ui.modal
});

const mdp = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(Modal);
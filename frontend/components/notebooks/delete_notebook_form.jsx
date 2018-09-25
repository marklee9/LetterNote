import React from "react";
import { withRouter } from "react-router-dom";

class DeleteNotebookForm extends React.Component {
	constructor(props) {
		super(props);

		this.deleteNotebook = this.deleteNotebook.bind(this);
	}

	closeModal() {
		return e => {
			e.preventDefault();
			this.props.closeModal();
		};
	}

	deleteNotebook() {
    this.props.deleteNotebook(this.props.notebookId);
		this.props.closeWorkingNote();
		this.props.closeModal();
	}

	render() {
		return <div className="create-notebook-form">
				<form className="actual-form" onSubmit={this.deleteNotebook}>
					<div className="actual-form-title">
						<div className="new-notebook-img" />
						<h1>Delete Notebook</h1>
					</div>

					<div className="new-notebook-linebreak" />

					<div className="new-notebook-input-div">
						<p>
							Are you sure you want to delete <strong>
								{this.props.notebookTitle}
							</strong>?
						</p>
						<p className="warning">
							All your notes in <strong>{this.props.notebookTitle}</strong> will be deleted.
						</p>
					</div>

					<div className="new-notebook-buttons">
						<button className="new-notebook-create" onClick={this.deleteNotebook}>
							Delete Notebook
						</button>
						<button className="new-notebook-cancel" onClick={this.closeModal()}>
							Cancel
						</button>
					</div>
				</form>
			</div>;
	}
}

export default withRouter(DeleteNotebookForm);

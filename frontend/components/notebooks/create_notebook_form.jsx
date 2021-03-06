import React from 'react';
import { withRouter } from "react-router-dom";

class CreateNotebookForm extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			title: '',
			author_id: this.props.currentUserId
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	closeModal() {
		return (e) => {
			e.preventDefault();
			this.props.closeModal();
			this.props.openModal("notebookIndex");
		};
	}

	update(field) {
		return (e) => (
			this.setState({ [field]: e.target.value })
		);
	}

	handleSubmit() {
		return (e) => {
			e.preventDefault();
			this.props.createNotebook(this.state);
			this.props.closeModal();
			this.props.openModal("notebookIndex");
		};
	}

  render() {
		return <div className="create-notebook-form">
				<div className="create-notebook-error">
					{this.props.errors.map((error, i) => (
						<p className="error-message" key={i}>
							{error}
						</p>
					))}
				</div>
				<form className="actual-form" onSubmit={this.handleSubmit()}>
					<div className="actual-form-title">
						<div className="new-notebook-img" />
						<h1>Create Notebook</h1>
					</div>

					<div className="new-notebook-linebreak" />

					<div className="new-notebook-input-div">
						<input className="new-notebook-input" type="text" onChange={this.update("title")} value={this.props.title} placeholder="Title your notebook" autofocus />
					</div>

					<div className="new-notebook-buttons">
						{this.state.title.length === 0 ? (
							<button className="new-notebook-create-disabled"
							onClick={(e) => e.preventDefault()}>
								Create Notebook
							</button>
						): (
							<button className="new-notebook-create" onClick={this.handleSubmit()}>
								Create Notebook
							</button>
						)}
						<button className="new-notebook-cancel" onClick={this.closeModal()}>
							Cancel
						</button>
					</div>
				</form>
			</div>;
  }
}

export default withRouter(CreateNotebookForm);
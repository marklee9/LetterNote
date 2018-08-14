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
		};
	}

	update(field) {
		return (e) => (
			this.setState({ [field]: e.target.value })
		);
	}

	handleSubmit() {
		const notebook = this.state;
		const prev = this.props.closeModal;

		return (e) => {
			e.preventDefault();
			this.props.createNotebook(notebook)
				.then(() => prev());
		};
	}

  render() {
		return <div className='create-notebook-form'>	
			<div className="create-notebook-error">
				{this.props.errors.map((error, i) => (
					<p className="error-message" key={i}>
						{error}
					</p>
				))}
			</div>
			<form>
					<div>
						<h1>Create Notebook</h1>
							<div></div>
							<input type="text" onChange={this.update('title')} value={this.props.title} placeholder="Title your notebook" />
						<div>
							<button onClick={this.closeModal()}>Cancel</button>
							<button onClick={this.handleSubmit()}>Create Notebook</button>
						</div>
					</div>
				</form>
		</div>;
  }
}

export default withRouter(CreateNotebookForm);
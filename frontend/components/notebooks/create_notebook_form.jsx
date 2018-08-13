import React from 'react';
import { withRouter } from "react-router-dom";

class CreateNotebookForm extends React.Component {
  constructor(props) {
		super(props);
		this.state = {title: ""};
	}

	closeModal() {
		return (e) => {
			e.preventDefault();
			this.props.closeModal();
		};
	}

  render() {
    return <form onSubmit={this.handleSubmit}>
				<div>
					<h1>Create Notebook</h1>
						<div>Line break</div>
						<input type="text" placeholder="Title your notebook" />
					<div>
						<button onClick={this.closeModal()}>Cancel</button>
						<input></input>
					</div>
				</div>
			</form>;
  }
}

export default withRouter(CreateNotebookForm);
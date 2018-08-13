import React from 'react';
import { withRouter } from "react-router-dom";

class CreateNotebookForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <form>
				<div>
					<h1>Create Notebook</h1>
						<div>Line break</div>
						<input type="text" placeholder="Title your notebook" />
					<div>
						<button>Cancal</button>
						<button>Submit</button>
					</div>
				</div>
			</form>;
  }
}

export default withRouter(CreateNotebookForm);
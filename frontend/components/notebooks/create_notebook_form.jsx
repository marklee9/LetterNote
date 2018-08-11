import React from 'react';
import { withRouter } from "react-router-dom";

class CreateNotebookForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <h1>Inside Modal</h1>
      <button onClick={this.props.closeModal}></button>
    </div>;
  }
}

export default withRouter(CreateNotebookForm);
import React from 'react';
import { withRouter } from "react-router-dom";

class CreateTagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      user_id: this.props.currentUserId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal() {
    return (e) => {
      e.preventDefault();
      this.props.closeModal();
      this.props.openModal("tagIndex");
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
      this.props.createTag(this.state);
      this.props.closeModal();
      this.props.openModal("tagIndex");
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
          <div className="new-tag-img"></div>
          <h1>Create Tag</h1>
        </div>

        <div className="new-notebook-linebreak" />

        <div className="new-notebook-input-div">
          <input className="new-notebook-input" type="text" onChange={this.update("name")} value={this.props.name} placeholder="Title your tag" autofocus />
        </div>

        <div className="new-notebook-buttons">
          {this.state.name.length === 0 ? (
            <button className="new-notebook-create-disabled"
              onClick={(e) => e.preventDefault()}>
              Create Tag
							</button>
          ) : (
              <button className="new-notebook-create" onClick={this.handleSubmit()}>
                Create Tag
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

export default withRouter(CreateTagForm);
import React from 'react';
import { withRouter } from "react-router-dom";

class DeleteNoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.deleteNote = this.deleteNote.bind(this);
  }

  closeModal() {
    return (e) => {
      e.preventDefault();
      this.props.closeModal();
    };
  }

  deleteNote() {
    this.props.deleteNote(this.props.noteId);
    this.props.closeWorkingNote();
    this.props.closeModal();
  }

  render() {
    return <div className="create-notebook-form">
      <form className="actual-form" onSubmit={this.deleteNote}>
        <div className="actual-form-title">
          <div className="new-notebook-img" />
          <h1>Delete Note</h1>
        </div>

        <div className="new-notebook-linebreak" />

        <div className="new-notebook-input-div">
          Are you sure you want to delete <strong>{this.props.note.title}</strong>?
        </div>

        <div className="new-notebook-buttons">
          <button className="new-notebook-create" onClick={this.deleteNote}>
            Delete Note
          </button>
          <button className="new-notebook-cancel" onClick={this.closeModal()}>
            Cancel
          </button>
        </div>
      </form>
    </div>;
  }
}

export default withRouter(DeleteNoteForm);
import ReactQuill from "react-quill";
import React from 'react';
import { debounce } from 'lodash';

class NoteForm extends React.Component {
	constructor(props) {
		super(props);

		if (!this.props.workingNote) {
			this.state = { title: "", body: "" };
		} else {
			this.state = this.props.note;
		}

		this.handleChangeBody = this.handleChangeBody.bind(this);
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
		this.actionNote = this.actionNote.bind(this);
	}
  
	handleChangeBody(value) {
		this.setState({ body: value }, debounce(this.actionNote, 2000));
	}

	handleChangeTitle(e) {
		this.setState({ title: e.target.value }, debounce(this.actionNote, 2000));
	}

	actionNote() {
    console.log(this.props.note);
		let note = this.props.note;
		if (!note) {
			note = {};
		}
		note.body = this.state.body;
		note.title = this.state.title;
		if (this.props.workingNote) {
			this.props.updateNote(note);
		} else {
			this.props.createNote(note);
		}
	}

	render() {
    if (this.props.form) {
      return (
        <div className="quill-outer-container">
          <div className="quill-container">
            <div className="tool-container">
              <div>
                <p>Add notebooks here</p>
              </div>
            </div>
            <input
              value={this.state.title}
              onChange={this.handleChangeTitle}
              className="note-title"
              type="text"
              placeholder="Title your note"
              autofocus
            />
            <ReactQuill
              value={this.state.body}
              onChange={this.handleChangeBody}
            />
          </div>
        </div>
      );
    } else {
      return (
      <div>
        <p>
          Please select note;
        </p>
      </div>
      );
    }
	}
}

export default NoteForm;
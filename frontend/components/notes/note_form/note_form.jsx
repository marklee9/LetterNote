import ReactQuill from "react-quill";
import React from 'react';
import { debounce } from 'lodash';

class NoteForm extends React.Component {
	constructor(props) {
		super(props);

		if (this.props.form === 'new') {
      this.state = { title: "", body: "" };
    } 
    else if (!this.props.form) {
      this.state = { title: "", body: "" };
    } else {
			this.state = this.props.note;
    }
   
		this.handleChangeBody = this.handleChangeBody.bind(this);
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
		this.actionNote = this.actionNote.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.workingNote !== nextProps.workingNote) {
      return this.setState(nextProps.note);
    }
  }
  
	handleChangeBody(value) {
		this.setState({ body: value }, debounce(this.actionNote, 1000));
	}

	handleChangeTitle(e) {
    this.setState({ title: e.target.value }, 
      debounce(this.actionNote, 1000));
	}

	actionNote() {
		if (this.props.workingNote) {
			return this.props.updateNote(this.state);
    } else {
			return this.props.createNote(this.state);
		}
  }

  openModal(field) {
    return (e) => {
      e.preventDefault();
      this.props.openModal(field);
    };
  }

	render() {
    if (Object.keys(this.props.allNotes).length === 0) {
      return (
        <div className="quill-outer-container">
          <div className="quill-select-notebook">
            <h1>You don't have any notebooks</h1>
            <div className='linebreak'></div>
              <button className='create' onClick={this.openModal("createNotebook")} />
            <h1>Click to create notebook</h1>
          </div>
        </div>
      );
    } else if (!this.props.form) {
      return (
        <div className="quill-outer-container">
          <div className="quill-select-notebook">
            <h1>Pick your notebook and Create a new note</h1>
            <div className='linebreak'></div>
            <button className='open' onClick={this.openModal("notebookIndex")} />
          </div>
        </div>
      );
    }
    else {
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
    }
	}
}

export default NoteForm;
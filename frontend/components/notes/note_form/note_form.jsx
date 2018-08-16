import ReactQuill from "react-quill";
import React from 'react';
import { debounce } from 'lodash';


class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: '', body: '' };
    this.handleChange = this.handleChange.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  handleChangeBody(value) {
    this.setState({ body: value }, debounce(this.updateNote, 1000));
  }

  handleChangeTitle(e) {
  this.setState({ title: e.target.value }, debounce(this.updateNote, 1000));
}

  updateNote() {
    let note = this.props.note;
    note.body = this.state.body;
    note.title = this.state.title;
    this.props.updateNote(note);
  } 
  
  render() {
    return <div className="quill-outer-container">
				<div className="quill-container">
					<div className="tool-container">
            <div>
              <p>other stuff</p>
            </div>
          </div>
					<input value={this.state.title} onChange={this.handleChangeTitle} className="note-title" type="text" placeholder="Title your note" autofocus />
					<ReactQuill value={this.state.body} onChange={this.handleChangeBody} />
				</div>
			</div>;
  }
}

export default NoteForm;
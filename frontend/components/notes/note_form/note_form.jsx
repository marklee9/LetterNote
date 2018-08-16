import ReactQuill from "react-quill";
import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return <div className="quill-outer-container">
				<div className="quill-container">
					<div className="tool-container">
            <div>
              <p>other stuff</p>
            </div>
          </div>
					<input className="note-title" type="text" placeholder="Title your note" autofocus />
					<ReactQuill value={this.state.text} onChange={this.handleChange} />
				</div>
			</div>;
  }
}

export default NoteForm;
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
    return (
        <ReactQuill value={this.state.text}
          onChange={this.handleChange} />
    );
  }
}

export default NoteForm;
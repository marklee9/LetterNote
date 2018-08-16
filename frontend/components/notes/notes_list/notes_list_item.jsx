import React from 'react';

class NotesListItem extends React.Component {
  constructor(props) {
    super(props);
    this.setWorkingNote = this.setWorkingNote.bind(this);
  }

  deleteNote() {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.props.props.deleteNote(this.props.note.id);
      this.props.props.closeWorkingNote();
    };
  }

  setWorkingNote() {
    this.props.props.fetchWorkingNote(this.props.note);
  }

  render() {
    return <div className="each-note" onClick={this.setWorkingNote}>
      <div className="title-div">
        <p className="index-note-title">
          {this.props.note.title}
        </p>
      </div>
      <div className="delete-div">
        <button className="index-note-delete" onClick={this.deleteNote()}/>
      </div>
    </div>;
  }
}

export default NotesListItem;

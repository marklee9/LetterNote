import React from 'react';
import NotesItem from './notes_item';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNoteCounter() {
    if (!this.props.notes) {
      return "0";
    } else {
      return String(this.props.notes.length);
    }
  }

  renderAllNotes() {
    if (this.props.notes) {
      return this.props.notes.map((note) => 
        <NotesItem props={this.props} key={note.id} note={note}></NotesItem>        
      );
    }
  }

  renderTitle() {
    return <span>
      {this.props.currentTagName}
    </span>;
  }
  
  render() {
    if (!this.props.tagNoteBar) {
      return null;
    } else {
     return <div className="note-list-id">
			<div className="note-list-id-title tag">
        <div className="tag-title">
          <p>
            TAG: {this.renderTitle()}
          </p>
        </div>
      </div>
        <div className='note-list-tag-note'>
          <h5>{this.renderNoteCounter()} Notes</h5>
        </div>
        <div className='linebreak-note-list'></div>
        {this.renderAllNotes()}
      </div>;
    }
  }
}


export default Notes;
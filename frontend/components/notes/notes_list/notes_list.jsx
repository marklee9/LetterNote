import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.notesBar) {
      return null;
    } else {
      return <div className="note-list-id">
        <div className="note-list-id-title">{this.renderTitle()}</div>
        <div className='note-list-id-note'>
          <h5>{this.renderNoteCounter()} Notes</h5>
        </div>
        <div className='linebreak-note-list'></div>
        {this.renderAllNotes()}
        {this.renderLittleNotes()}
      </div>;
    }
  }
}


export default NoteList;
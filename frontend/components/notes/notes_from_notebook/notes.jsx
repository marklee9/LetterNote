import React from 'react';
import NotesItem from './notes_item';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  renderLittleNotes(){
    if (!this.props.notes || this.props.notes.length < 2) {
			return <div className="modal-empty-note">
					<div className="modal-empty-note-big-img" />

					<div className="modal-empty-note-content">
						<h4>
							Click <div className="plus-img" /> to create a notebook
						</h4>
						<p>
							Notebooks keep notes organized. Share them to work together
						</p>
					</div>
				</div>;
		}
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
    return <p>
      {this.props.currentNotebookTitle}
    </p>;
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
        <div className="all-notes">
          {this.renderAllNotes()}
        </div>
        {this.renderLittleNotes()}
      </div>;
    }
  }
}


export default Notes;
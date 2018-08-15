import React from 'react';

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
        <div className="each-note">
          <div className="title-div">
            <p className="index-note-title">
              {note.title}
            </p>
          </div>
          <div className="delete-div">
            <button className="index-note-delete" />
          </div>
        </div>
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
        {this.renderAllNotes()}
        {this.renderLittleNotes()}
      </div>;
    }
  }
}


export default Notes;
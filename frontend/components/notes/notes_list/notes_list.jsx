import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
		super(props);
		console.log(this.props);
	}
	renderLittleNotes() {
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

  render() {
    if (!this.props.notesListBar) {
			return null;
		} else {
			return <div className="note-list-id">
					<div className="note-list-id-note full-list">
						<h5>All Notes</h5>
					</div>
					<div className="linebreak-note-list" />	
				{this.renderAllNotes()}
				{this.renderLittleNotes()}
				</div>;
		}
  }
}


export default NoteList;
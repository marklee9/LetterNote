import React from 'react';
import NotesListItem from './notes_list_item';

class NoteList extends React.Component {
  constructor(props) {
		super(props);
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
				<NotesListItem props={this.props} key={note.id} note={note}></NotesListItem>
			);
		}
	}

	giveBorderAnimation() {
		let allNotes = Array.from(document.querySelectorAll(".each-note"));
		allNotes.forEach(note => note.addEventListener("click", function () {
			allNotes.forEach(note1 => note1.classList.remove("clicked"));
			this.classList.add("clicked");
		}));
	}

  render() {
    if (!this.props.notesListBar) {
			return null;
		} else {
			return <div className="note-list-id">
					<div className="note-list-id-note full-list">
						<p className="note-list-notes">NOTES</p>
						<p className="count">{this.props.notes.length} notes</p>
					</div>
					<div className="linebreak-note-list" />	
					<div className='all-notes2'>
						{this.renderAllNotes()}
					</div>
				{this.renderLittleNotes()}
				{this.giveBorderAnimation()}
				</div>;
		}
  }
}


export default NoteList;
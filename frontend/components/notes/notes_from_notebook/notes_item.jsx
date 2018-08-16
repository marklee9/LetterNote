import React from "react";

class NotesListItem extends React.Component {
	constructor(props) {
    super(props);
    console.log(this.props);
		this.setWorkingNote = this.setWorkingNote.bind(this);
	}

	deleteNote() {
		return e => {
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
		return (
			<div className="each-note" onClick={this.setWorkingNote}>
				<div className="title-div">
					<p className="index-note-title">{this.props.note.title}</p>
				</div>
				<div className="delete-div">
					<button onClick={this.deleteNote()} className="index-note-delete" />
				</div>
			</div>
		);
	}
}

export default NotesListItem;
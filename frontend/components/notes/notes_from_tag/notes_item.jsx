import React from "react";
import ReactHtmlParser from "react-html-parser";

class NotesListItem extends React.Component {
	constructor(props) {
    super(props);
		this.setWorkingNote = this.setWorkingNote.bind(this);

		console.log(props);
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
		this.props.props.fetchWorkingNote(this.props.note[0]);
		this.props.props.resetQuill();
		this.props.props.editQuill();
	}

	render() {
		return (
			<div className="each-note" onClick={this.setWorkingNote}>
				<div className="title-div">
					<p className="index-note-title">
						{this.props.note[0].title}
					</p>
					<p className="note-date">
						{this.props.note[0].updated.toUpperCase() + " AGO"}
					</p>
					<div className="note-body">
						{ReactHtmlParser(this.props.note[0].body)}
					</div>
				</div>
				<div className="delete-div">
					<button onClick={this.deleteNote()} className="index-note-delete" />
				</div>
			</div>
		);
	}
}

export default NotesListItem;

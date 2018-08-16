import React from 'react';

class NotebooksIndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.setCurrentNotebookAndCloseModal = this.setCurrentNotebookAndCloseModal.bind(this);
	}

	deleteNotebook() {
		return (e) => {
			e.preventDefault();
			e.stopPropagation();
			this.props.props.closeNoteBar();
			this.props.props.deleteNotebook(this.props.notebook.id);
			this.props.props.openNoteListBar();
		};
	}

	setCurrentNotebookAndCloseModal() {
		this.props.props.fetchCurrentNotebook(this.props.notebook);
		this.props.props.closeModal();
		this.props.props.openNoteBar();
		this.props.props.closeNoteListBar();
	}

	render() {
		return <div className="each-notebook" onClick={this.setCurrentNotebookAndCloseModal}>
				<div className="title-div">
					<p className="index-notebook-title">
						{this.props.notebook.title}
					</p>
				</div>
				<div className="delete-div">
					<button onClick={this.deleteNotebook()} className="index-notebook-delete" />
				</div>
			</div>;
	}
}

export default NotebooksIndexItem;

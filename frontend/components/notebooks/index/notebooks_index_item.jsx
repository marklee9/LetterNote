import React from 'react';

class NotebooksIndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.setCurrentNotebookAndCloseModal = this.setCurrentNotebookAndCloseModal.bind(this);
	}

	componentDidMount() {
		this.props.props.fetchNotebooks();
	}

	deleteNotebook() {
		return (e) => {
			e.preventDefault();
			e.stopPropagation();
			this.props.props.closeNoteBar();
			this.props.props.deleteNotebook(this.props.notebookId);
			this.props.props.closeNoteListBar();
			this.props.props.openNoteListBar();
		};
	}

	setCurrentNotebookAndCloseModal() {
		this.props.props.fetchCurrentNotebook({
			id: this.props.notebookId,
			title: this.props.notebookTitle
		});

		let modal = document.getElementById('modal');
		modal.classList.add("animated");
		modal.classList.add("slideOutLeft");
		setTimeout(() => {this.props.props.closeModal();}, 600);

		this.props.props.closeNoteListBar();
		this.props.props.closeTagNoteBar();
		this.props.props.openNoteBar();
	}

	render() {
		return <div>
			<div className="each-notebook" onClick={this.setCurrentNotebookAndCloseModal}>
						<div className="title-div">
							<p className="index-notebook-title">
								{this.props.notebookTitle}
							</p>
							<div className="note-count">{this.props.count} <span>notes</span></div>
						</div>
						<div className="delete-div">
							<button onClick={this.deleteNotebook()} className="index-notebook-delete" />
						</div>
				</div>
				<div className="underline"></div>
		</div>;
	}
}

export default NotebooksIndexItem;

import React from 'react';

class NotebooksIndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.deleteNotebook = this.deleteNotebook.bind(this);
		console.log(this.props);
	}

	deleteNotebook() {
		this.props.props.deleteNotebook(this.props.notebook.id);
	}

	render() {
		return <div className="each-notebook">
				<div className="title-div">
					<p className="index-notebook-title">
						{this.props.notebook.title}
					</p>
				</div>
				<div className="delete-div">
					<button onClick={this.deleteNotebook} className="index-notebook-delete" />
				</div>
			</div>;
	}
}

export default NotebooksIndexItem;

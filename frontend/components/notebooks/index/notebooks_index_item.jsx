import React from 'react';

class NotebooksIndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.deleteNotebook = this.deleteNotebook.bind(this);
	}

	deleteNotebook(e) {
		console.log(this.props);
		e.preventDefault();
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
					<button className="index-notebook-edit" />
					<button onClick={this.deleteNotebook} className="index-notebook-delete" />
				</div>
			</div>;
	}
}

export default NotebooksIndexItem;

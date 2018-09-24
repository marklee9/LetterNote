import React from 'react';

class TagsIndexItem extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			name: this.props.tagName,
			edit: false
		};

		this.openEditor = this.openEditor.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.enter = this.enter.bind(this);
		this.saveChange = this.saveChange.bind(this);
	}

	openEditor() {
		this.setState({edit: true});
	}

	deleteTag() {
		return (e) => {
			e.preventDefault();
			this.props.deleteTag(this.props.tagId);
		};
	}

	handleUpdate(e) {
		this.setState({ name: e.target.value });
	}

	enter(e) {
		if (e.key === "Enter") {
			this.saveChange(e);
		}
	}

	saveChange() {
		this.props.updateTag({ id: this.props.tagId, name: this.state.name });
		this.setState({edit: false});
	}

	render() {
		if (this.state.edit) {
			return <div className="each-tag">
					<div className="tag-div">
						<input className="edit-input" onKeyPress={this.enter} value={this.state.name} type="text" onChange={this.handleUpdate} />
						<div className="update-button">
							<i onClick={this.saveChange} class="fas fa-check-circle" />
						</div>
					</div>
				</div>;
		}

		return <div className="each-tag">
				<div className="tag-div">
					<span className="tag-name">
						<div className="tag-name-div">
							<p>{this.props.tagName} <span className="tag-count">{this.props.count}</span></p>
						</div>
					</span>
					<div className="edit-tag-div">
						<button onClick={this.openEditor} className="edit-tag-img"></button>
					</div>
					<div className="delete-tag-div">
						<button onClick={this.deleteTag()} className="delete-tag-img"></button>
					</div>
				</div>
			</div>;
	}
}

export default TagsIndexItem;
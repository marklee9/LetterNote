import React from 'react';

class TagsIndexItem extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			name: this.props.tagName
		};
	}

	deleteTag() {
		return (e) => {
			e.preventDefault();
			this.props.deleteTag(this.props.tagId);
		};
	}

	render() {
		console.log(this.props);
		return <div className="each-tag">
				<div className="tag-div">
					<span className="tag-name">
						<div className="tag-name-div">
							{this.props.tagName} <span className="tag-count">{this.props.count}</span>
						</div>
					</span>
					<div className="edit-tag-div">
						<button className="edit-tag-img"></button>
					</div>
					<div className="delete-tag-div">
						<button onClick={this.deleteTag()} className="delete-tag-img"></button>
					</div>
				</div>
			</div>;
	}
}

export default TagsIndexItem;
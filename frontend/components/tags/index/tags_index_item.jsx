import React from 'react';

class TagsIndexItem extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			name: this.props.tagName
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
						<div className="edit-tag-img" />
					</div>
					<div className="delete-tag-div">
						<div className="delete-tag-img" />
					</div>
				</div>
			</div>;
	}
}

export default TagsIndexItem;
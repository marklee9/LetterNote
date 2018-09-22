import React from 'react';

class TagsIndexItem extends React.Component {
  constructor(props) {
    super(props);
	}
	
	sortTags() {
		console.log(this.props.tags);
	}

	render() {
		console.log(this.props);
		return (
				<h1>Mark Lee</h1>
		);
	}
}

export default TagsIndexItem;
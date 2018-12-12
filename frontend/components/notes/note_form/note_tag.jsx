import React from "react";

class NoteTag extends React.Component {
	constructor(props) {
    super(props);
    this.deleteTagging = this.deleteTagging.bind(this);
	}

  deleteTagging() {
    this.props.deleteTagging(this.props.taggingId)
			.then(() => this.props.fetchTags())
      .then(() => this.props.update());
  }

	render() {
    return <div className="tags">
      <span className="current-tag">
        {this.props.tagName}
        <span onClick={this.deleteTagging} className="tags-delete-button">X</span>
      </span>
    </div>;
	}
}

export default NoteTag;

import React from "react";

class TagsIndex extends React.Component {
  render() {
    return <div>
      <h1>Tags Index</h1>
      <h2>{this.props.tags}</h2>
    </div>;
  }
}

export default TagsIndex;


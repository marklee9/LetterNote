import React from 'react';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div >
        <h1>hihi</h1>
      </div>
    );
  }
}

export default Notes;
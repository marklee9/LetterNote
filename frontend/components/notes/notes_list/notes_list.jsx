import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    if (!this.props.notesBar) {
      return null;
    } else {
      return <div className="note-list-id">
        
      </div>;
    }
  }
}


export default NoteList;
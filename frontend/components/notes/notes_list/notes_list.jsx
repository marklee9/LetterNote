import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.notesListBar) {
			return null;
		} else {
			return <div className="note-list-id">
					<div className="note-list-id-note" className="full-list">
						<h5>All Notes</h5>
					</div>
					<div className="linebreak-note-list" />
					<h1>hihi</h1>
				</div>;
		}
  }
}


export default NoteList;
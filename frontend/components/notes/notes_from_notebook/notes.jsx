import React from 'react';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  renderLittleNotes(){
    if (!this.props.notes || this.props.notes.length < 2) {
			return <div className="modal-empty-note">
					<div className="modal-empty-note-big-img" />

					<div className="modal-empty-note-content">
						<h4>
							Click <div className="plus-img" /> to create a notebook
						</h4>
						<p>
							Notebooks keep notes organized. Share them to work together
						</p>
					</div>
				</div>;
		}
  } 

  renderAllNotes() {
    if (this.props.notes) {
      return <div>
        <div>

        </div>
      </div>;
    }
  }

  renderTitle() {
    return <p>
      {this.props.currentNotebookTitle}
    </p>;
  }
  
  render() {
    if (!this.props.notesBar) {
      return null;
    } else {
     return <div className="note-list-id">
					<div className="note-list-id-transform">
						<div className="note-list-id-title">{this.renderTitle()}</div>
						<div />
						{this.renderAllNotes()}
						{this.renderLittleNotes()}
					</div>
        </div>;
    }
  }
}


export default Notes;
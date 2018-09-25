import React from 'react';
import NotebooksIndexItem from './notebooks_index_item';

class NotebooksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  openModal(field) {
    return (e) => {
      e.preventDefault();
      this.props.openModal(field);
    };
  }

  renderCreateNotebookMessage() {
    if (this.props.notebooks === undefined || this.props.notebooks.length < 3) {
      return <div className='modal-empty-notebook'>
            <div className='modal-empty-notebook-big-img'></div>

          <div className='modal-empty-notebook-content'>
            <h4>Click <div className='modal-empty-img' /> to create a notebook</h4>
            <p>Notebooks keep notes organized. Share them to work together</p>
          </div>
      </div>;
    }
  }

  render() {
    let index = this.props.notebooks.map((notebook) => {     
      let noteCount = Object.values(this.props.notes).filter((note) => 
        notebook.id === note.notebook_id
      );
      return <NotebooksIndexItem count={noteCount.length} props={this.props} key={notebook.id} notebookId={notebook.id} notebookTitle={notebook.title} />;
      }
    );

    if (index.length === 0) {
      index = <div className="notebook-index-empty">
        <button onClick={this.openModal("createNotebook")} />
        <h1>Make your first Notebook!</h1>
      </div>;
    }

    return (
    <div className='modal-notebook-index'>
      <div className='modal-notebook-notebook'>
        <div className='modal-notebook-notebook-title'>
          <p>Notebooks</p> 
          <button onClick={this.openModal('createNotebook')} className='create-notebook-img'></button>
        </div>
      </div>
      <div className='all-notebook-list'>
        {index} 
      </div>
      {this.renderCreateNotebookMessage()}
    </div>
    );
  }
}

export default NotebooksIndex;
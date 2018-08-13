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

  render() {
    const index = this.props.notebooks.map((notebook) =>
      <NotebooksIndexItem props={this.props} key={notebook.id} notebook={notebook}></NotebooksIndexItem>
  );


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
    </div>
    );
  }
}

export default NotebooksIndex;
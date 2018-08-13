import React from 'react';
import NotebooksIndexItem from './notebooks_index_item';

class NotebooksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  render() {
    const index = this.props.notebooks.map((notebook) =>
      <NotebooksIndexItem key={notebook.id} notebook={notebook}></NotebooksIndexItem>
  );

    return (
    <div>
      <div>
        <h1>Notebooks</h1> 
      </div>
      {index} 
    </div>
    );
  }
}

export default NotebooksIndex;
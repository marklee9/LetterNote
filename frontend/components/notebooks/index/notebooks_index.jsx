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

    return <div>
          <h1>Sup bro</h1> 
          {index}       
    </div>;
  }
}

export default NotebooksIndex;
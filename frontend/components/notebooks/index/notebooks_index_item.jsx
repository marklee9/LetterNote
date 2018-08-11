import React from 'react';
import { Link } from 'react-router-dom';

const NotebookIndexItem = props => (
  <div>
    <p>{props.notebook.title}</p>
  </div>
);

export default NotebookIndexItem;

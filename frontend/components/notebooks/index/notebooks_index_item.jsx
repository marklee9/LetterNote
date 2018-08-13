import React from 'react';
import { Link } from 'react-router-dom';

const NotebookIndexItem = props => (
	<div className="each-notebook">
		<p className="index-notebook-title">{props.notebook.title}</p>
			<button className='index-notebook-delete'></button>
	</div>
);

export default NotebookIndexItem;

import React from 'react';

const NotebookIndexItem = props => (
	<div className="each-notebook">
		<div className="title-div">
		  <p className="index-notebook-title">{props.notebook.title}</p>
		</div>
		<div className="delete-div">
			<button className='index-notebook-delete'></button>
		</div>
	</div>
);

export default NotebookIndexItem;

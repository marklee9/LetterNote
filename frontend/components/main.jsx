import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
import NotesBarContainer from './notes/notes_from_notebook/notes_container';
import NotesListContainer from './notes/notes_list/notes_list_container';
import NoteFormContainer from './notes/note_form/note_form_container';
import Modal from './modal/modal';
import {Route} from 'react-router-dom';

export default () => (
	<div className="prevent-bouncy-scroll">
		<Modal />
		<SidebarContainer />
		<NotesBarContainer />
		<NotesListContainer />
		<NoteFormContainer />
	</div>
);

// {/* <Route path='/main/:noteId' component={NoteFormContainer} ></Route> */}

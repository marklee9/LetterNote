import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
import NotesBarContainer from './notes/notes_from_notebook/notes_container';
import Modal from './modal/modal';

export default () => (
  <div>
    <Modal />
    <SidebarContainer />
    <NotesBarContainer />
  </div>
);

// import NotebooksIndexContainer from '../components/notebooks/index/notebooks_index_container';

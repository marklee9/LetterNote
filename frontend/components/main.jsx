import React from 'react';
import NotebooksIndexContainer from '../components/notebooks/index/notebooks_index_container';
import SidebarContainer from './sidebar/sidebar_container';
import Modal from './modal/modal';

export default () => (
  <div>
    <Modal />
    <SidebarContainer />
    <NotebooksIndexContainer />
  </div>
);

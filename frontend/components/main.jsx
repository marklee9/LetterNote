import React from 'react';
import NotebooksIndexContainer from '../components/notebooks/index/notebooks_index_container';
import SidebarContainer from './sidebar/sidebar_container';

export default () => (
  <div>
    <SidebarContainer />
    <NotebooksIndexContainer />
  </div>
);

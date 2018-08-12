import React from "react";
import { withRouter } from 'react-router-dom';
import NotebooksIndexContainer from '../../components/notebooks/index/notebooks_index_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotebooks: false
    };
    this.renderNotebooks = this.renderNotebooks.bind(this);
  }

  logoutUser() {
    return (e) => {
      e.preventDefault();
      this.props.logout();
      this.props.history.push('/');
    }; 
  }

  openCreateNotebookModal() {
    console.log("clicked");
    return (e) => {
      e.preventDefault();
      this.props.openModal("createNotebook");
    };
  }

  renderNotebooks(e) {
    e.preventDefault();
    this.setState({
      showNotebooks: !this.state.showNotebooks
    });
  }

  render () {
    if (this.props.currentUserId) {

    return <div>
      <div className="sidebar-div">
        <div className='sidebar-logo'>
          <img className='home-logo-img' src="https://www.devicemagic.com/wp-content/uploads/2017/01/evernote-1.png" />
        </div>
        <div className='sidebar-outer-div'>
          <div className='sidebar-inner-div'>
            <button onClick={this.openCreateNotebookModal()} className='new-note-img'></button>
          </div>
        </div>
        <div className='sidebar-outer-div'>
          <div className='sidebar-inner-div'>
            <button className='meeting-img'></button>
          </div>
        </div>
        <div className='sidebar-outer-div'>
          <div className='sidebar-inner-div'>
            <button className='search-img'></button>
          </div>
        </div>
        <div className='sidebar-outer-div'>
          <div className='sidebar-inner-div'>
            <button className='workchat-img'></button>
          </div>
        </div>

        <div className="sidebar-space"></div>

        <div className='sidebar-outer-div'>
          <div className='sidebar-inner-div'>
            <button className='star-img'></button>
          </div>
        </div>

        <div className='sidebar-outer-div'>
          <div className='sidebar-inner-div'>
            <button className='notes-img'></button>
          </div>
        </div>

        <div className='sidebar-outer-div'>
          <div className='sidebar-inner-div'>
            <button onClick={this.renderNotebooks} className='notebooks-img'></button>
          </div>
        </div>

        <div className='sidebar-outer-div'>
          <div className='sidebar-inner-div'>
            <button className='tags-img'></button>
          </div>
        </div>

        <div id="sidebar-account">
          <button onClick={this.logoutUser()}>Log out</button>
        </div>
      </div>
      
      <div>
        {this.state.showNotebooks && <NotebooksIndexContainer />}
      </div>
    </div>;
    }
  }
}

export default withRouter(Sidebar);

/* <button onClick={this.openCreateNotebookModal()}>New</button> */ 
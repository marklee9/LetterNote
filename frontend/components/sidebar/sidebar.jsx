import React from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
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

  render () {
    if (this.props.currentUserId) {

    return <div className="sidebar-div">
        <div className='sidebar-logo'>
          <img className='home-logo-img' src="https://www.devicemagic.com/wp-content/uploads/2017/01/evernote-1.png" />
        </div>
        <div className='sidebar-outer-div'>
          <div className='sidebar-inner-div'>
            <button className='new-note-img'></button>
          </div>
        </div>
        <div className='sidebar-outer-div'>
          <div className='sidebar-inner-div'>
            <span>1</span>
          </div>
        </div>
        <div className='sidebar-outer-div'>
          <div className='sidebar-inner-div'>
            <span>1</span>
          </div>
        </div>
        <div className='sidebar-outer-div'>
          <div className='sidebar-inner-div'>
            <span>1</span>
          </div>
        </div>

        <div id="sidebar-account">
          <button onClick={this.logoutUser()}>Log out</button>
        </div>
      </div>;
    }
  }
}

export default withRouter(Sidebar);

/* <button onClick={this.openCreateNotebookModal()}>New</button> */ 
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

  render () {
    if (this.props.currentUserId) {

    return <div className="sidebar-div">
        <div>
          <img align='middle' className='home-logo-img' src="https://www.devicemagic.com/wp-content/uploads/2017/01/evernote-1.png" alt="" />
        </div>
        <div>
          <span>1</span>
        </div>
        <div>
          <span>1</span>
        </div>
        <div>
          <span>1</span>
        </div>
        <div>
          <button onClick={this.logoutUser()}>Log out</button>
        </div>
      </div>;
    }
  }
}

export default withRouter(Sidebar);
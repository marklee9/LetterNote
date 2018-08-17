import React from "react";
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
	}
	
	componentDidMount() {
		this.props.fetchNotes();
	}

  logoutUser() {
    return (e) => {
      e.preventDefault();
      this.props.logout();
      this.props.history.push('/');
    }; 
  }

  openModal(field) {
    return (e) => {
      e.preventDefault();
      this.props.openModal(field);
    };
	}
	
	openNotesList() {
		return (e) => {
			e.preventDefault();
			this.props.closeNoteBar();
			this.props.openNoteListBar();
		};
	}

  render () {
    if (this.props.currentUserId) {

    return <div className="sidebar-div">
					<div className="sidebar-logo">
						<img className="home-logo-img" src="https://www.devicemagic.com/wp-content/uploads/2017/01/evernote-1.png" />
					</div>
					<div className="sidebar-outer-div">
						<div className="sidebar-inner-div">
							<button onClick={this.openModal("createNotebook")} className="new-note-img" />
						</div>
					</div>
					<div className="sidebar-outer-div">
						<div className="sidebar-inner-div">
							<button className="meeting-img" />
						</div>
					</div>
					<div className="sidebar-outer-div">
						<div className="sidebar-inner-div">
							<button className="search-img" />
						</div>
					</div>
					<div className="sidebar-outer-div">
						<div className="sidebar-inner-div">
							<button className="workchat-img" />
						</div>
					</div>

					<div className="sidebar-space" />

					<div className="sidebar-outer-div">
						<div className="sidebar-inner-div">
							<button className="star-img" />
						</div>
					</div>

					<div className="sidebar-outer-div">
						<div className="sidebar-inner-div">
						<button onClick={this.openNotesList()} className="notes-img" />
						</div>
					</div>

					<div className="sidebar-outer-div">
						<div className="sidebar-inner-div">
              <button onClick={this.openModal("notebookIndex")} className="notebooks-img" />
						</div>
					</div>

					<div className="sidebar-outer-div">
						<div className="sidebar-inner-div">
							<button className="tags-img" />
						</div>
					</div>

					<div className='linebreak-sidebar'></div>
					<div id="sidebar-account">
						<button className='logout-button' onClick={this.logoutUser()}><i class="fas fa-sign-out-alt"></i></button>
					</div>
				</div>;
    }
  }
}

export default withRouter(Sidebar);

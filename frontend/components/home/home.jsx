import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import SignupFormContainer from '../session/signup_form_container';
import { Route, withRouter } from "react-router-dom";

class Home extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return <div className="home-div">
				<div>
					<NavBarContainer />
				</div>
				<div className='home-slide'>
					<h1>Slideshow</h1>
				</div>
				<div className="signup-form-container">
					<h2 className='home-signup-text'>Sign Up for Free</h2>
					<Route component={SignupFormContainer} />
				</div>
			</div>;
  }
}

export default withRouter(Home);
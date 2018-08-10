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
				<div className="signup-form-container">
					<Route component={SignupFormContainer} />
				</div>
			</div>;
  }
}

export default withRouter(Home);
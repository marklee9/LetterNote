import React from "react";
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import { Route } from 'react-router-dom';

class Outer extends React.Component {

	render() {
		let component, header;
		if (this.props.path.location === 'login') {
			component = <Route component ={LoginFormContainer} />;
			header = 'Sign in';
		} else {
			component = <Route component ={SignupFormContainer} />;
			header = "Create Account";
		}

		return (
			<div className="session-div">
        <div className="logo-text">
          <img className="logo-image" src="http://logok.org/wp-content/uploads/2015/02/Evernote-logo.png" />
          <h1 className="text-after-logo">{header}</h1>
        </div>
        {component}
			</div>
		);
	}
}

export default Outer;

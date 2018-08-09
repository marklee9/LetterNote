import React from "react";
import SignupForm from '../session/signup_form_container';

class Outer extends React.Component {
  constructor(props) {
    super(props);
  }
	render() {
		return (
			<div className="session-div">
        <div className="logo-text">
          <img className="logo-image" src="http://logok.org/wp-content/uploads/2015/02/Evernote-logo.png" />
          <h1 className="text-after-logo">{this.props.formType}</h1>
        </div>
        <SignupForm props={this.props}/>
			</div>
		);
	}
}

export default Outer;

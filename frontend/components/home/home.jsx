import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import SignupFormContainer from '../session/signup_form_container';
import { Route, withRouter } from "react-router-dom";
import Splash from './splash/splash';
import Focus from './focus/focus';
import Links from './links/links';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return <div className="home-div">
			<div>
				<NavBarContainer />
			</div>

			<div className="first-splash">
				<div className="home-slide">
					<h1 className="slider-big">Meet Letternote, your anywhere access notepad.</h1>
					<p className="slider-small">Capture, organize, and share notes from anywhere. Your best ideas are always with you and always in sync.</p>
				</div>

				<div className="signup-form-container">
					<h2 className="home-signup-text">Sign Up for Free</h2>
					<Route component={SignupFormContainer} />
				</div>
			</div>
      <Splash props={this.props}/>
			<Focus />
			<Links />
		</div>;
  }
}

export default withRouter(Home);

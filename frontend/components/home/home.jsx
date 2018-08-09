import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import SignupForm from '../session/signup_form';

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
					<SignupForm props={this.props}/>
				</div>
			</div>;
  }
}

export default Home;
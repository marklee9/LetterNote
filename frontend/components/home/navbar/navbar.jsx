import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		return <nav>
				<div className="home-navbar">
				
					<a className="home-a-tag">
						<img align='middle' className='home-logo-img' src="https://www.devicemagic.com/wp-content/uploads/2017/01/evernote-1.png" alt=""/>
						<span className="home-logo-text">LETTERNOTE</span>
					</a>

					<a className='home-link' href="https://www.linkedin.com/in/m-arklee/">
						<i class="fab fa-linkedin"></i>
						<span> </span> LinkedIn
					</a>

					<a className='home-link' href="https://github.com/marklee9/LetterNote">
						<i class="fab fa-github"></i>
						<span> </span> Github
					</a>

				<a id='nav-demo' onClick={this.props.removeSessionErrors}>
						<Link id="no-space" to={'/signup'}>Try Letternote</Link>
					</a>
				</div>
			</nav>;
	}
}

export default NavBar;
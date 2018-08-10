import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
	render() {
		return <nav>
				<div className="home-navbar" id="myTopnav">
					<a className="home-a-tag">
						<img align='middle' className='home-logo-img' src="https://www.devicemagic.com/wp-content/uploads/2017/01/evernote-1.png" alt=""/>
						<span className="home-logo-text">LETTERNOTE</span>
					</a>
					<a className='home-link' href="https://www.linkedin.com/in/m-arklee/">LinkedIn</a>
					<a className='home-link' href="https://github.com/marklee9/LetterNote">Github</a>

					<a id='nav-demo'>Try Letternote Demo</a>
				</div>
			</nav>;
	}
}

export default NavBar;
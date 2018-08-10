import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
	render() {
		return <div className="nav-div">
				<div className="logo">
					<p className="logo-letter">
						<img className="home-logo-image" src="http://logok.org/wp-content/uploads/2015/02/Evernote-logo.png" />
						LETTERNOTE
					</p>
				</div>

				<div className="other-stuff2">
					<a className="link-google" href="https://www.w3schools.com">
						w3schools
					</a>
				</div>
				<div className="other-stuff2">
					<a className="link-google" href="https://www.w3schools.com">
						w3schools
					</a>
				</div> 
				<div className="other-stuff2">
					<a className="link-google" href="https://www.w3schools.com">
						w3schools
					</a>
				</div>
			</div>;
	}
}

export default NavBar;

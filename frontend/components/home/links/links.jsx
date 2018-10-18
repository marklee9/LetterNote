import React from 'react';
import { Link, withRouter } from "react-router-dom";

class Links extends React.Component {
  render() {
    return <div className="links-splash">
				<div className="logo-div">
          <div className="green-logo" />
          <span>Letternote</span>
				</div>

        <div className="line-break"/>

        <div className="content">
          <div className="links">
            <div>
              <ul>
                <li><span className="top">Product</span></li>
                <li><p>Why Letternote</p></li>
                <li><p>Letternote Basic</p></li>
                <li><p>Letternote Premium</p></li>
                <li><p>Letternote Business</p></li>
                <li><p>Compare Plans</p></li>
                <li><p>Student Discount</p></li>
                <li><p>Download App</p></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><span className="top">Features</span></li>
                <li><p>Web Clipper</p></li>
                <li><p>Templates</p></li>
                <li><p>Spaces</p></li>
                <li><p>Integrations</p></li>
                <li><p>-Microsoft Teams</p></li>
                <li><p>-Slack</p></li>
                <li><p>-Salesforce</p></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><span className="top">Community</span></li>
                <li><p>Our Community</p></li>
                <li><p>Certified Consultants</p></li>
                <li><p>Developers</p></li>
                <li><p>Events</p></li>
                <li><p>Forum</p></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><span className="top">Support</span></li>
                <li><p>Help & Learning</p></li>
                <li><p>Trouble Shooting</p></li>
                <li><p>Blog</p></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><span className="top">Support</span></li>
                <li><p>About Us</p></li>
                <li><p>Press</p></li>
                <li><p>Careers</p></li>
                <li><p>Inclusion & Diversity</p></li>
                <li><p>Contact Us</p></li>
              </ul>
            </div>
            <div className="signup">
            <span>
              <Link className="signup" to={"/signup"}>Sign up</Link>
              &nbsp; &nbsp; or &nbsp; &nbsp;
              <Link className="login" to={"/login"}>Log In</Link>
            </span>
            </div>
          </div>
        </div>

        <div className="content2">
          <a className='home-link' href="https://www.linkedin.com/in/m-arklee/">
            <i class="fab fa-linkedin"></i>
          </a>

          <a className='home-link' href="https://github.com/marklee9/LetterNote">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div className="line-break2" />
        <div className="copyright">
          <span>© 2018 Letternote Corporation. All rights reserved.</span>
          <div className="slp">
            <p>
              <span>Security</span>
              <span>Legal</span>
              <span>Privacy</span>
            </p>
          </div>
        </div>
			</div>;
  }
}


export default withRouter(Links);

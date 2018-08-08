import React from 'react';
import { timingSafeEqual } from 'crypto';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type) {
    console.log(this.state);
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  } 

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props
      .processForm(user)
      .then((() => this.props.history.push('/notes')));
  }

  handleDemo(e) {
    e.preventDefault();
    this.props
			.login({ email: "demo_user", password: "demo123123" })
			.then(() => this.props.history.push("/notes"));
  }

  render () {   
    return <div className="session-form">
				<form>
					<ol>
						<li>
							<button onClick={this.handleDemo}>Sign in as Demo User</button>
						</li>
						<li>
							<label id="email">
								<input for="email" type="text" onChange={this.handleInput("email")} value={this.state.email} placeholder="Email address or username" />
							</label>
						</li>
						<li>
							<label id="password">
								<input for="password" type="password" onChange={this.handleInput("password")} value={this.state.password} placeholder="Password" />
							</label>
						</li>
            <li>
              {this.props.errors.map((error, i) => <p key={i}>{error}</p>)}
            </li>
						<li>
							<input for="remember-me" type="checkbox" />
							<label id="remember-me">Remember me for 30 days</label>
						</li>
						<li>
							<button onClick={this.handleSubmit}>Continue</button>
						</li>
					</ol>
				</form>
			</div>;
  }
}

export default SignupForm;

// [type] needs [] because it needs to be evaluated before assign as key
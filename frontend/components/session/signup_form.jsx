import React from 'react';

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
		return e => {
			this.setState({ [type]: e.target.value });
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.processForm(user).then(() => this.props.history.push("/notes"));
	}

	handleDemo(e) {
		e.preventDefault();
		this.props
			.login({ email: "demo_user", password: "demo123123" })
			.then(() => this.props.history.push("/notes"));
	}

	renderMessage() {
		if (this.props.formType === "Sign in") {
			return <h6>Don't have an account?</h6>;
		}
		return <h6>Already have an account?</h6>;
	}

	renderSubmitButtonMessage() {
		if (this.props.formType === "Sign in") {
			return <p>Continue</p>;
		}
		return <p>Create Account</p>;
	}

	renderTerms() {
		if (this.props.formType === "Sign in") {
			return <p></p>;
		}
		return <p className="term-p">
				By clicking Create Account, I agree to the <a className="terms">
					Terms of Service
				</a> and <a className="terms">Privacy Policy</a>.
			</p>;
	}

	render() {
		return <div className="session-div">
				<div className="logo-text">
					<img className="logo-image" src="http://logok.org/wp-content/uploads/2015/02/Evernote-logo.png" />
					<h1 className="text-after-logo">{this.props.formType}</h1>
				</div>
        <div className='form-only'>
          <form className="session-form">
            <button className="button demo-button" onClick={this.handleDemo}>
              Sign in as Demo User
            </button>

            <h2><span> or </span></h2>

            <label id="email">
              <input for="email" type="text" onChange={this.handleInput("email")} value={this.state.email} placeholder="Email address or username" />
            </label>

            <label id="password">
              <input for="password" type="password" onChange={this.handleInput("password")} value={this.state.password} placeholder="Password" />
            </label>

              {this.props.errors.map((error, i) => (
                <p className="error-message" key={i}>
                  {error}
                </p>
              ))}

							{this.renderTerms()}

            <button className="button submit-button" onClick={this.handleSubmit}>
              {this.renderSubmitButtonMessage()}
            </button>

            <input className="remember-me-checkbox" type="checkbox" />
          <p className='remember-me'>Remember me for 30 days</p>
        </form>
      </div>
        {this.renderMessage()}
        {this.props.navLink}
    </div>;
	}
}

export default SignupForm;

// [type] needs [] because it needs to be evaluated before assign as key
import React from 'react';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
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
		this.props.processForm(user).then(() => this.props.history.push("/main"));
	}

	handleDemo(e) {
		e.preventDefault();
		this.props
			.login({ email: "demo_user", password: "demo123123" })
			.then(() => this.props.history.push("/main"));
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
		if (this.props.formType === "Sign in" || this.props.errors.length > 0) {
			return <p></p>;
		}
		return <p className="term-p">
				By clicking Create Account, I agree to the <a className="terms">
					Terms of Service
				</a> and <a className="terms">Privacy Policy</a>.
			</p>;
	}

	renderErrors() {
			this.props.errors.map((error, i) => (
				<p className="error-message" key={i}>
					{error}
				</p>
			));
	}

	render() {
		return <div>
				<div className="form-only">
					<form className="session-form">
					<button className="button demo-button animated infinite pulse delay-2s" onClick={this.handleDemo}>
							<span>Sign in as Demo User</span>
						</button>
						<h2>
							<span> or </span>
						</h2>
						<label id="email">
							<input for="email" type="text" onChange={this.handleInput("email")} value={this.state.email} placeholder="Email address or username" />
						</label>
						<label id="password">
							<input for="password" type="password" onChange={this.handleInput("password")} value={this.state.password} placeholder="Password" />
						</label>
						<div className="error-div">
							{this.renderTerms()}
							{this.props.errors.map((error, i) => (
								<p className="error-message" key={i}>
									{error}
								</p>
							))}
						</div>
						<button className="button submit-button" onClick={this.handleSubmit}>
							{this.renderSubmitButtonMessage()}
						</button>
						<input className="remember-me-checkbox" type="checkbox" />
						<p className="remember-me">Remember me for 30 days</p>
					</form>
				</div>
				<div className="endtext">
					{this.renderMessage()}
					{this.props.navLink}
				</div>
			</div>;
	}
}

export default SignupForm;

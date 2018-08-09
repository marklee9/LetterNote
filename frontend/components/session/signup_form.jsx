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

  renderMessage() {
    if (this.props.formType === "Sign in") {
      return (<h6>Don't have an account?</h6>);
    }
    return (<h6>Already have an account?</h6>);
  }

  render () {   
    return <div className="session-div">
        <div className='logo-text'>
          <img className="logo-image" src="http://logok.org/wp-content/uploads/2015/02/Evernote-logo.png" />
          <h1 className="text-after-logo">{this.props.formType}</h1>
        </div>
				<form className="session-form">
					<ol>
						<li>
							<button onClick={this.handleDemo}>
								Sign in as Demo User
							</button>
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
						{this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
						<li>
							<input for="remember-me" type="checkbox" />
							<label id="remember-me">Remember me for 30 days</label>
						</li>
						<li>
							<button onClick={this.handleSubmit}>Continue</button>
						</li>
					</ol>
				</form>
				{this.renderMessage()}
				{this.props.navLink}
			</div>;
  }
}

export default SignupForm;

// [type] needs [] because it needs to be evaluated before assign as key
import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  } 

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then((() => this.props.history.push('/notebooks')));
  }

  render () {   
    return <div className="session-form">
				<form action="">
          <ol>
            <li>
              <label id="email">
                <input type="text" placeholder="Email address or username" />
              </label>
            </li>
            <li>
              <label id="email">
                <input type="password" placeholder="Password" />
              </label>
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
import { connect } from 'react-redux';
import { signup, login } from '../../actions/sessions_actions';
import { Link } from "react-router-dom";
import SignupForm from './signup_form';

const msp = ({ errors }) => {
	return {
		errors: errors.session,
		formType: "Sign up",
		navLink: <Link to="/login">log in instead</Link>
	};
};

const mdp = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SignupForm);
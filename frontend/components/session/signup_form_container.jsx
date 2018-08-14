import { connect } from 'react-redux';
import React from "react";
import { signup, login, removeSessionErrors } from '../../actions/sessions_actions';
import { Link } from "react-router-dom";
import SignupForm from './signup_form';

const msp = ({ errors }) => ({
  errors: errors.session,
  formType: "Create Account",
  navLink: <Link to="/login">Sign in</Link>
});

const mdp = dispatch => ({
	processForm: user => dispatch(signup(user)),
	login: user => dispatch(login(user)),
	removeSessionErrors: () => dispatch(removeSessionErrors())
});

export default connect(msp, mdp)(SignupForm);
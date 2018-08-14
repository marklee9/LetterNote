import { connect } from "react-redux";
import React from 'react';
import { login, removeSessionErrors } from "../../actions/sessions_actions";
import { Link } from "react-router-dom";
import SignupForm from "./signup_form";

const msp = ({ errors }) => ({
	errors: errors.session,
	formType: "Sign in",
	navLink: <Link to="/signup">Create account</Link>
});

const mdp = dispatch => ({
	processForm: user => dispatch(login(user)),
	login: (user) => dispatch(login(user)),
	removeSessionErrors: () => dispatch(removeSessionErrors())

});

export default connect(msp, mdp)(SignupForm);

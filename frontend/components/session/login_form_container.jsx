import { connect } from "react-redux";
import React from 'react';
import { login } from "../../actions/sessions_actions";
import { Link } from "react-router-dom";
import outer from "./outer_signup_form";

const msp = ({ errors }) => ({
	errors: errors.session,
	formType: "Sign in",
	navLink: <Link to="/signup">Create account</Link>
});

const mdp = dispatch => ({
	processForm: user => dispatch(login(user)),
	login: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(outer);

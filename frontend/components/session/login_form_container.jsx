import { connect } from "react-redux";
import { login } from "../../actions/sessions_actions";
import { withRoute } from "";
import SignupForm from "./signup_form";

const mdp = dispatch => ({
	processForm: user => dispatch(login(user))
});

export default connect(null, mdp)(SignupForm);

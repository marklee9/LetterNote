import { connect } from "react-redux";
import NavBar from "./navbar";
import { login, removeSessionErrors } from "../../../actions/sessions_actions";

const mdp = dispatch => ({
	processForm: user => dispatch(login(user)),
  removeSessionErrors: () => dispatch(removeSessionErrors())
});

export default connect( null, mdp )(NavBar);

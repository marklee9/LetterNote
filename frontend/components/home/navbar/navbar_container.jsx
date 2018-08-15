import { connect } from "react-redux";
import NavBar from "./navbar";
import { login, removeSessionErrors } from "../../../actions/sessions_actions";

const msp = (state) => ({
  session: state.session.currentUserId
});

const mdp = dispatch => ({
	processForm: user => dispatch(login(user)),
  removeSessionErrors: () => dispatch(removeSessionErrors())
});

export default connect( msp, mdp )(NavBar);

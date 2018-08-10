import { connect } from "react-redux";
import NavBar from "./navbar";
import { login } from '../../../actions/sessions_actions';

const mdp = dispatch => ({ 
  processForm: user => dispatch(login(user)) 
});

export default connect( null, mdp )(NavBar);

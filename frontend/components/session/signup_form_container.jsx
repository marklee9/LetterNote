import { connect } from 'react-redux';
import { signup } from '../../actions/sessions_actions';
import SignupForm from './signup_form';

const mdp = dispatch => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(null, mdp)(SignupForm);
import { connect } from 'react-redux';
import { signup } from '../../actions/sessions_actions';
import { withRoute } from '';
import SignupForm from './signup_form';

const mdp = dispatch => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(null, mdp)(SignupForm);
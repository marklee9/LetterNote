import { connect } from "react-redux";
import Sidebar from './sidebar';
import { logout } from '../../actions/sessions_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state) => ({
  currentUserId: state.session.currentUserId,
  notebookSlide: state.ui.notebookSlide
});

const mdp = dispatch => ({
  logout: (id) => dispatch(logout(id)),
  openModal : (modal) => dispatch(openModal(modal))
});

export default connect(msp, mdp)(Sidebar);
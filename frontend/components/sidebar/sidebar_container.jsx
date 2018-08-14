import { connect } from "react-redux";
import Sidebar from './sidebar';
import { logout } from '../../actions/sessions_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state) => ({
  currentUserId: state.session.currentUserId,
});

const mdp = dispatch => ({
  logout: (id) => dispatch(logout(id)),
  openModal : (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(Sidebar);
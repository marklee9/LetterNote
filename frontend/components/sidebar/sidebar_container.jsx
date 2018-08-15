import Sidebar from './sidebar';
import { connect } from "react-redux";
import { logout } from '../../actions/sessions_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchNotes } from "../../actions/note_actions";


const msp = (state) => ({
  currentUserId: state.session.currentUserId,
  notes: state.entities.notes
});

const mdp = dispatch => ({
	fetchNotes: () => dispatch(fetchNotes()),
	logout: id => dispatch(logout(id)),
	openModal: modal => dispatch(openModal(modal)),
	closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(Sidebar);
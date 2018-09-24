import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { createTag } from "../../actions/tags_actions";
import CreateTagForm from './create_tag_form';

const msp = state => ({
  currentUserId: state.session.currentUserId,
  errors: state.errors.notebooks
});

const mdp = dispatch => ({
  createTag: tag => dispatch(createTag(tag)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(msp, mdp)(CreateTagForm);
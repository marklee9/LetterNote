import { connect } from "react-redux";
import { fetchTags } from '../../../actions/tags_actions';
import TagsIndex from './tags_index';
import { openModal, closeModal } from "../../../actions/modal_actions";
import { openNoteBar, closeNoteBar } from "../../../actions/notes_bar_actions";
import { openNoteListBar, closeNoteListBar } from '../../../actions/notes_list_bar_actions';
import { selectTags } from '../../../reducers/selector';

const msp = (state) => ({
  notebooks: selectTags(state),
  errors: state.errors.tags
});


const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  openNoteBar: () => dispatch(openNoteBar()),
  closeNoteBar: () => dispatch(closeNoteBar()),
  openNoteListBar: () => dispatch(openNoteListBar()),
  closeNoteListBar: () => dispatch(closeNoteListBar()),
});

export default connect(msp, mdp)(TagsIndex);
import { connect } from "react-redux";
import { createTag, updateTag, deleteTag, fetchCurrentTag } from "../../../actions/tags_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";
import TagsIndex from './tags_index';
import { selectTags } from '../../../reducers/selector';
import { openTagNoteBar } from "../../../actions/tag_notes_bar_actions";
import { closeNoteBar } from "../../../actions/notes_bar_actions";
import { closeNoteListBar } from '../../../actions/notes_list_bar_actions';


const msp = (state) => ({
	tags: selectTags(state),
  errors: state.errors.tags
});

const mdp = dispatch => ({
	openModal: modal => dispatch(openModal(modal)),
	closeModal: () => dispatch(closeModal()),
	createTag: tag => dispatch(createTag(tag)),
	updateTag: tag => dispatch(updateTag(tag)),
	deleteTag: id => dispatch(deleteTag(id)),
	fetchCurrentTag: tag => dispatch(fetchCurrentTag(tag)),
	openTagNoteBar: () => dispatch(openTagNoteBar()),
	closeNoteBar: () => dispatch(closeNoteBar()),
	closeNoteListBar: () => dispatch(closeNoteListBar()),
});

export default connect(msp, mdp)(TagsIndex);
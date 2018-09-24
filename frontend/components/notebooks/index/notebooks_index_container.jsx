import { connect } from "react-redux";
import NotebooksIndex from './notebooks_index';
import { fetchNotebooks, deleteNotebook, updateNotebook, fetchCurrentNotebook } from '../../../actions/notebooks_action';
import { openModal, closeModal } from "../../../actions/modal_actions";
import { openNoteBar, closeNoteBar } from "../../../actions/notes_bar_actions";
import { openNoteListBar, closeNoteListBar} from '../../../actions/notes_list_bar_actions';
import { selectNotebooks } from '../../../reducers/selector';
import { openTagNoteBar, closeTagNoteBar } from "../../../actions/tag_notes_bar_actions";


const msp = (state) => ({
  notebooks: selectNotebooks(state),
  errors: state.errors.notebooks
});

const mdp = dispatch => ({
	fetchNotebooks: () => dispatch(fetchNotebooks()),
	updateNotebook: notebook => dispatch(updateNotebook(notebook)),
	deleteNotebook: id => dispatch(deleteNotebook(id)),
	openModal: modal => dispatch(openModal(modal)),
	closeModal: () => dispatch(closeModal()),
	fetchCurrentNotebook: notebook => dispatch(fetchCurrentNotebook(notebook)),
	openNoteBar: () => dispatch(openNoteBar()),
	closeNoteBar: () => dispatch(closeNoteBar()),
	openNoteListBar: () => dispatch(openNoteListBar()),
	closeNoteListBar: () => dispatch(closeNoteListBar()),
	openTagNoteBar: () => dispatch(openTagNoteBar()),
	closeTagNoteBar: () => dispatch(closeTagNoteBar())
});

export default connect(	msp, mdp )(NotebooksIndex);

import { connect } from "react-redux";
import NoteList from "./notes_list";
import { closeNoteBar } from '../../../actions/notes_bar_actions';
import { fetchNote, 
	fetchWorkingNote, 
	closeWorkingNote, 
	deleteNote 
} from "../../../actions/note_actions";
import { editQuill, resetQuill } from '../../../actions/quill_actions';
import { closeTagNoteBar } from "../../../actions/tag_notes_bar_actions";
import { openModal } from "../../../actions/modal_actions";


const msp = state => ({
	notes: Object.values(state.entities.notes),
	notesListBar: state.ui.notesListBar
});

const mdp = dispatch => ({
	closeTagNoteBar: () => dispatch(closeTagNoteBar()),
	closeNoteBar: () => dispatch(closeNoteBar()),
	fetchNote: id => dispatch(fetchNote(id)),
	fetchWorkingNote: note => dispatch(fetchWorkingNote(note)),
	closeWorkingNote: () => dispatch(closeWorkingNote()),
	deleteNote: id => dispatch(deleteNote(id)),
	editQuill: () => dispatch(editQuill()),
	resetQuill: () => dispatch(resetQuill()),
	openModal: (field) => dispatch(openModal(field)),

});

export default connect(
	msp,
	mdp
)(NoteList);

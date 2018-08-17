import { connect } from "react-redux";
import NoteList from "./notes_list";
import { closeNoteBar } from '../../../actions/notes_bar_actions';
import { fetchNote, 
	fetchWorkingNote, 
	closeWorkingNote, 
	deleteNote 
} from "../../../actions/note_actions";
import { editQuill, resetQuill } from '../../../actions/quill_actions';

const msp = state => ({
	notes: Object.values(state.entities.notes),
	notesListBar: state.ui.notesListBar
});

const mdp = dispatch => ({
	closeNoteBar: () => dispatch(closeNoteBar()),
	fetchNote: id => dispatch(fetchNote(id)),
	fetchWorkingNote: note => dispatch(fetchWorkingNote(note)),
	closeWorkingNote: () => dispatch(closeWorkingNote()),
	deleteNote: id => dispatch(deleteNote()),
	editQuill: () => dispatch(editQuill()),
	resetQuill: () => dispatch(resetQuill())
});

export default connect(
	msp,
	mdp
)(NoteList);

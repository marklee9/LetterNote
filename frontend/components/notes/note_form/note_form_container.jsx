import { connect } from "react-redux";
import NoteForm from "./note_form";
import { fetchNote, createNote, updateNote, deleteNote } from "../../../actions/note_actions";

const msp = state => ({
	workingNote: state.ui.workingNote,
  note: state.entities.notes[state.ui.workingNote],
  form: state.ui.quillContainer
});

const mdp = dispatch => ({
  fetchNote: (id) => dispatch(fetchNote(id)),
	createNote: () => dispatch(createNote()),
	updateNote: note => dispatch(updateNote(note)),
	deleteNote: id => dispatch(deleteNote(id))
});

export default connect(
	msp,
	mdp
)(NoteForm);

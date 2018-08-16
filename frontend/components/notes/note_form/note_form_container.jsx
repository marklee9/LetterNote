import { connect } from "react-redux";
import NoteForm from "./note_form";
import { createNote, fetchNote, updateNote, deleteNote } from "../../../actions/note_actions";

const msp = ({notebooks, notes}) => ({
  notebooks,
  notes,
});

const mdp = dispatch => ({
  createNote: () => dispatch(createNote()),
	fetchNote: () => dispatch(fetchNote()),
	updateNote: () => dispatch(updateNote()),
  deleteNote: () => dispatch(deleteNote())
});

export default connect(
	msp,
	mdp
)(NoteForm);

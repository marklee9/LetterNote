import { connect } from "react-redux";
import NoteForm from "./note_form";
import { createNote, fetchNote,  deleteNote } from "../../../actions/note_actions";

const msp = () => ({
  default: {title: '', body: ''},
  formType: 'new'
});

const mdp = dispatch => ({
  createNote: () => dispatch(createNote()),
  fetchNote: () => dispatch(fetchNote()),
  deleteNote: (id) => dispatch(deleteNote(id))
});

export default connect(
  msp,
  mdp
)(NoteForm);

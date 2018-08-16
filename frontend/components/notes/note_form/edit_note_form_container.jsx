import { connect } from "react-redux";
import NoteForm from "./note_form";
import { fetchNote, updateNote, deleteNote } from "../../../actions/note_actions";

const msp = (state) => ({
  note: state.entities.notes[state.ui.workingNote],
  fomType: 'edit'
});

const mdp = dispatch => ({
  fetchNote: () => dispatch(fetchNote()),
  updateNote: (note) => dispatch(updateNote(note)),
  deleteNote: (id) => dispatch(deleteNote(id))
});

export default connect(
  msp,
  mdp
)(NoteForm);

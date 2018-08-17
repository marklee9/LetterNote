import { connect } from "react-redux";
import NoteForm from "./note_form";
import { 
  fetchNote, 
  createNote, 
  updateNote, 
  deleteNote 
} from "../../../actions/note_actions";
import { fetchNotebooks } from '../../../actions/notebooks_action';
import { openModal } from '../../../actions/modal_actions';

const msp = state => ({	
  workingNote: state.ui.workingNote,
  allNotes: state.entities.notes,
  note: state.entities.notes[state.ui.workingNote],
  notebooks: state.entities.notebooks,
  currentNotebookId: state.ui.currentNotebookId,
  form: state.ui.quillContainer
});

const mdp = dispatch => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  fetchNote: (id) => dispatch(fetchNote(id)),
	createNote: () => dispatch(createNote()),
	updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id)),
  openModal: modal => dispatch(openModal(modal)),  
});

export default connect(
	msp,
	mdp
)(NoteForm);

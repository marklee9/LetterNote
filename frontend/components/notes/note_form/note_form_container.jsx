import { connect } from "react-redux";
import NoteForm from "./note_form";
import { 
  fetchNote, 
  createNote, 
  updateNote, 
  deleteNote 
} from "../../../actions/note_actions";
import { createTag, fetchTags } from "../../../actions/tags_actions";
import { createTagging, deleteTagging, fetchAllTaggings } from "../../../actions/taggings_actions";
import { fetchNotebooks } from '../../../actions/notebooks_action';
import { openModal } from '../../../actions/modal_actions';
import { fetchWorkingNote } from '../../../actions/note_actions';


const msp = state => ({	
  workingNote: state.ui.workingNote,
  allNotes: state.entities.notes,
  note: state.entities.notes[state.ui.workingNote],
  notebooks: state.entities.notebooks,
  currentNotebookId: state.ui.currentNotebookId,
  form: state.ui.quillContainer,
  taggings : state.entities.taggings,
  tags: state.entities.tags,
  currentUserId: state.session.currentUserId
});

const mdp = dispatch => ({
	createTagging: tagging => dispatch(createTagging(tagging)),
	deleteTagging: id => dispatch(deleteTagging(id)),
	fetchNotebooks: () => dispatch(fetchNotebooks()),
	fetchNote: id => dispatch(fetchNote(id)),
	createNote: note => dispatch(createNote(note)),
	updateNote: note => dispatch(updateNote(note)),
	deleteNote: id => dispatch(deleteNote(id)),
	openModal: modal => dispatch(openModal(modal)),
	fetchWorkingNote: note => dispatch(fetchWorkingNote(note)),
  createTag: (tag) => dispatch(createTag(tag)),
  fetchTags: () => dispatch(fetchTags()),
  fetchAllTaggings: () => dispatch(fetchAllTaggings())
});

export default connect(
	msp,
	mdp
)(NoteForm);

import { connect } from "react-redux";
import NoteList from "./notes_list";
import { closeNoteBar } from '../../../actions/notes_bar_actions';

const msp = state => ({
	notes: state.entities.notes,
});

const mdp = dispatch => ({
  closeNoteBar: () => dispatch(closeNoteBar())
});

export default connect(
	msp,
	mdp
)(NoteList);

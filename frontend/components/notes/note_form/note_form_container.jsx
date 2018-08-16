import { connect } from "react-redux";
import NoteForm from "./note_form";

const msp = ({notebooks, notes}) => ({
  notebooks,
  notes,
});

const mdp = dispatch => ({

});

export default connect(
	msp,
	mdp
)(NoteForm);

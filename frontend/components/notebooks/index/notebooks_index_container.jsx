import { connect } from "react-redux";
import NotebooksIndex from './notebooks_index';
import { fetchNotebooks } from '../../../actions/notebooks_action';

const msp = (state) => ({
  notebooks: Object.values(state.entities.notebooks),
  errors: state.errors.notebooks
});


const mdp = dispatch => ({
  fetchNotebooks: () => dispatch(fetchNotebooks())
});

export default connect(	msp, mdp )(NotebooksIndex);

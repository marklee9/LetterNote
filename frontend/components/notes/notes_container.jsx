import { connect } from "react-redux";
import { fetchNotes } from "../../actions/note_actions";
import React from 'react';
import { Link } from "react-router-dom";
import Notes from './notes';

const msp = (state) => ({

});

const mdp = dispatch => ({
	fetchNotes: () => dispatch(fetchNotes())
});

export default connect(msp, mdp)(Notes);
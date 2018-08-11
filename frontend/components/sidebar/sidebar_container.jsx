import React from 'react';
import { connect } from "react-redux";
import Sidebar from './sidebar';
import { logout } from '../../actions/sessions_actions';

const msp = (state) => ({
  currentUserId: state.session.currentUserId
});

const mdp = dispatch => ({
  logout: (id) => dispatch(logout(id))
});

export default connect(msp, mdp)(Sidebar);
import React from "react";
import ReactDOM from "react-dom";
import * as SessionUtil from './util/session_api_util';



// this will select tag with id of 'root' and
// replace with the ReactDOM.render
document.addEventListener("DOMContentLoaded", () => {
	window.login = SessionUtil.login;
	window.logout = SessionUtil.logout;

	const root = document.getElementById("root");
	ReactDOM.render(<h1>LetterNote</h1>, root);
});

import React from "react";
import ReactDOM from "react-dom";
import RootReducer from './reducers/root_reducer';


document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<h1>LetterNote</h1>, root);
});


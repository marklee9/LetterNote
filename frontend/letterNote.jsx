import React from "react";
import ReactDOM from "react-dom";
import RootReducer from './reducers/root_reducer';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<h1>LetterNote</h1>, root);
});


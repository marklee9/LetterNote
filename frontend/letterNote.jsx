import React from "react";
import ReactDOM from "react-dom";
import RootReducer from './reducers/root_reducer';
import Root from './components/root';
import configureStore from './components/store/store';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={configureStore()}/>, root);
});


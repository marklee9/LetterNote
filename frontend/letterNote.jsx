import React from "react";
import ReactDOM from "react-dom";
import RootReducer from './reducers/root_reducer';
import Root from './components/root';
import configureStore from './components/store/store';

const store = configureStore();
// we don't put the store directly on the window because
// it can be confusing when debugging, sometimes giving you access to state
// when you shouldn't
window.getState = store.getState;
window.dispatch = store.dispatch;

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={configureStore()}/>, root);
});


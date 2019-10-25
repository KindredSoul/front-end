import React from "react";
import { Route } from "react-router-dom";
import SignupForm from "./components/Onboard";
import TodoList from "./components/tasks_shopping_list/TodoList";

import "./App.css";

function App() {
	return (
		<div className="App">
			<TodoList />
			<Route path="/register" component={SignupForm} />
			<Route path="/login"  />
		</div>
	);
}

export default App;

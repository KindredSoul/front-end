import React from "react";
import { Route, Redirect } from "react-router-dom";
import SignupForm from "./components/Onboard";
import TasksList from "./components/todolists/TasksList";
import Login from "./components/Login";
import EventsList from "./components/EventsList";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Route path="/taskslist" exact component={TasksList} />
			<PrivateRoute path="/taskslist/:id" render={props => <TasksList id={props.match.params.id} />} />
			<PrivateRoute path="/eventslist" component={EventsList} />
			<Route path="/register" component={SignupForm} />
			<Route path="/login" component={Login} />
		</div>
	);
}

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (localStorage.getItem("token") ? <Component {...props} /> : <Redirect to="/login" />)} />
);

export default App;

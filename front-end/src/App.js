import React from "react";
import { Route, Redirect } from "react-router-dom";
import SignupForm from "./components/Onboard";
<<<<<<< HEAD
import TasksList from "./components/todolists/TasksList";
import Login from "./components/Login";
import EventsList from "./components/EventsList";
=======
import Login from './components/Login';
import EventsTasks from './components/EventsTasks';
import EventsList from './components/EventsList';
>>>>>>> ee01f842835db0d795d564b9ae682414f6d9c12d
import "./App.css";
import TheHeader from './components/Header'

function App() {
	return (
		<div className="App">
<<<<<<< HEAD
			<Route path="/taskslist" exact component={TasksList} />
			<PrivateRoute path="/taskslist/:id" render={props => <TasksList id={props.value.match.params.event_id} />} />
			<PrivateRoute path="/eventslist" component={EventsList} />
=======

			<TheHeader />
			<PrivateRoute path='/eventslist' component={EventsList} />
			<PrivateRoute path='/eventstasks' component={EventsTasks} />
>>>>>>> ee01f842835db0d795d564b9ae682414f6d9c12d
			<Route path="/register" component={SignupForm} />
			<Route path="/login" component={Login} />
		</div>
	);
}

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (localStorage.getItem("token") ? <Component {...props} /> : <Redirect to="/login" />)} />
);

export default App;

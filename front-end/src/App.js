import React from "react";
import { Route, Redirect } from "react-router-dom";
import SignupForm from "./components/Onboard";
<<<<<<< HEAD
import TodoList from "./components/todolists/TodoList";

import EventsList from "./components/EventsList";
=======
import TasksList from "./components/TasksList";
import Login from './components/Login';

import EventsList from './components/EventsList';
>>>>>>> 8237a280948e728bfc56906314d71481138f278d
import "./App.css";

function App() {
	return (
		<div className="App">
<<<<<<< HEAD
			<TodoList />
			<Route path="/register" component={SignupForm} />
			<Route path="/login" />
=======
			<PrivateRoute path='/tasksList/:id' component={TasksList} />
			<PrivateRoute path='/eventslist' component={EventsList} />
			<Route path="/register" component={SignupForm} />
			<Route path="/login" component={Login}  />
>>>>>>> 8237a280948e728bfc56906314d71481138f278d
		</div>
	);
}

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
	  {...rest}
	  render={props =>
		localStorage.getItem("token") ? (
		  <Component {...props} />
		) : (
		  <Redirect to="/login" />
		)
	  }
	/>
  );

export default App;

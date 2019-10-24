import React from "react";

export const TaskList = props => {
	const { taskName, taskCompletion } = props;
	return (
		<div>
			<li>Task: {taskName[0].toUpperCase() + taskName.slice(1)}</li>
			<div>Completed: {taskCompletion ? "Yes" : "WIP"}</div>
		</div>
	);
};

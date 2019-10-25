import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export const TaskList = props => {
	const { taskName, taskCompletion } = props;
	return (
		<div>
			<li>Task: {taskName[0].toUpperCase() + taskName.slice(1)}</li>
			{taskCompletion ? (
				<Form>
					<FormGroup check>
						<Label check>
							<Input type="radio" name="radio1" defaultChecked /> Completed
						</Label>
					</FormGroup>
					<FormGroup>
						<Label check>
							<Input type="radio" name="radio1" /> Incomplete
						</Label>
					</FormGroup>
				</Form>
			) : (
				<Form>
					<FormGroup check>
						<Label check>
							<Input type="radio" name="radio1" /> Complete
						</Label>
					</FormGroup>
					<FormGroup>
						<Label check>
							<Input type="radio" name="radio1" defaultChecked /> Incomplete
						</Label>
					</FormGroup>
				</Form>
			)}
			<button>Edit</button>
			<button>Delete</button>
		</div>
	);
};

export const AddTaskForm = props => {
	return (
		<Form inline>
			<FormGroup>
				<Label for="task" hidden>
					Task
				</Label>
				<Input type="text" name="task" id="task" />
			</FormGroup>{" "}
			<FormGroup check>
				<Label check>
					<Input type="radio" name="radio1" /> Completed
				</Label>
			</FormGroup>
			<FormGroup check>
				<Label check>
					<Input type="radio" name="radio1" defaultChecked /> Incomplete
				</Label>
			</FormGroup>{" "}
			<Button>Submit</Button>
		</Form>
	);
};

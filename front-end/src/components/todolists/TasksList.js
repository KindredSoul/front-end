import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	/*  Card, Button, CardTitle, CardText,*/ Row,
	Col,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from "reactstrap";
import classnames from "classnames";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { TaskList, AddTaskForm } from "./TodoList";
import { ShoppingList } from "./ShoppingList";
import { VendorList } from "./VendorList";

const Lists = props => {
	const [taskData, setTaskData] = useState([]);
	const [shoppingData, setShoppingData] = useState([]);
	const [vendorData, setVendorData] = useState([]);
	const [newData, setNewData] = useState({});
	// State and handlers for reactstrap============================================================
	const [activeTab, setActiveTab] = useState("1");
	const [modal, setModal] = useState(false);

	const toggleTab = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const toggle = () => setModal(!modal);

	const { className, buttonLabel } = props;
	// =============================================================================================
	useEffect(() => {
		let id = props.id;
		console.log(id);
		axiosWithAuth()
			.get(`/api/tasks`)
			.then(res => {
				console.log(res);
				setTaskData(res.data);
			})
			.catch(error => {
				console.log(error);
			});
		axiosWithAuth()
			.get("/api/shopping")
			.then(res => {
				console.log(res);
				setShoppingData(res.data);
			})
			.catch(error => {
				console.log(error);
			});
		axiosWithAuth()
			.get("/api/vendors")
			.then(res => {
				console.log(res);
				setVendorData(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	}, [props.id]);

	return (
		<div>
			<Nav tabs>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "1" })}
						onClick={() => {
							toggleTab("1");
						}}>
						Tasks
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "2" })}
						onClick={() => {
							toggleTab("2");
						}}>
						Shopping List
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "3" })}
						onClick={() => {
							toggleTab("3");
						}}>
						Vendors
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<Row>
						<Col sm="12">
							<div>
								<h3>Tasks</h3>
								<ol>
									{taskData.map(task => (
										<TaskList key={task.event_id} taskName={task.task_name} taskCompletion={task.task_completed} />
									))}
								</ol>
								<div>
									<Button color="primary" onClick={toggle}>
										Add A Task{buttonLabel}
									</Button>
									<Modal isOpen={modal} toggle={toggle} className="createTask">
										<ModalHeader toggle={toggle}>Create an event task</ModalHeader>
										<ModalBody>
											<FormGroup>
												<Label for="task" hidden>
													Task:
												</Label>
												{"	"}
												<Input type="text" name="task" id="task" />
											</FormGroup>{" "}
											<FormGroup check>
												<Label for="radio1" check>
													Task status:
												</Label>
												<Input type="radio" name="radio1" value="true">
													{" "}
													Completed
												</Input>
												<Input type="radio" name="radio1" defaultChecked value="false">
													{" "}
													Incomplete
												</Input>
											</FormGroup>
											{/* <FormGroup check>
												<Label check>
													<Input type="radio" name="radio1" defaultChecked value="false" /> Incomplete
												</Label>
											</FormGroup>{" "} */}
											<Button>Submit</Button>
										</ModalBody>
										<ModalFooter>
											<Button color="primary" onClick={toggle}>
												Submit
											</Button>{" "}
											<Button color="secondary" onClick={toggle}>
												Cancel
											</Button>
										</ModalFooter>
									</Modal>
								</div>
							</div>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="2">
					<Row>
						<Col sm="6">
							<div>
								<h3>Shopping list</h3>
								<ol>
									{shoppingData.map(item => (
										<ShoppingList key={item.event_id} itemName={item.item_name} itemPrice={item.item_price} itemStock={item.item_acquired} />
									))}
								</ol>
								<div>
									<Button color="primary" onClick={toggle}>
										Add An Item
									</Button>
									<Modal isOpen={modal} toggle={toggle} className="createItem">
										<ModalHeader toggle={toggle}>Modal title</ModalHeader>
										<ModalBody>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
											voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
											deserunt mollit anim id est laborum.
										</ModalBody>
										<ModalFooter>
											<Button color="primary" onClick={toggle}>
												Do Something
											</Button>{" "}
											<Button color="secondary" onClick={toggle}>
												Cancel
											</Button>
										</ModalFooter>
									</Modal>
								</div>
							</div>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="3">
					<Row>
						<Col sm="12">
							<div>
								<h3>Vendors</h3>
								<ol>
									{vendorData.map(vendor => (
										<VendorList key={vendor.event_id} vendorName={vendor.vendor_name} vendorPhone={vendor.contact_number} vendorEmail={vendor.contact_email} />
									))}
								</ol>
								<div>
									<Button color="primary" onClick={toggle}>
										Add A Vendor
									</Button>
									<Modal isOpen={modal} toggle={toggle} className="createVendor">
										<ModalHeader toggle={toggle}>Modal title</ModalHeader>
										<ModalBody>
											<FormGroup>
												<Label for="task" hidden>
													Task:
												</Label>
												{"	"}
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
										</ModalBody>
										<ModalFooter>
											<Button color="primary" onClick={toggle}>
												Do Something
											</Button>{" "}
											<Button color="secondary" onClick={toggle}>
												Cancel
											</Button>
										</ModalFooter>
									</Modal>
								</div>
							</div>
						</Col>
					</Row>
				</TabPane>
			</TabContent>
			<Link to="/eventslist">
				<Button color="warning">Return to events list</Button>
			</Link>
		</div>
	);
};

export default Lists;

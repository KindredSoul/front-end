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
	const [newTask, setNewTask] = useState({
		task_name: "",
		task_completed: false
	});
	const [editTask, setEditTask] = useState({task_name: ""});

	const [shoppingData, setShoppingData] = useState([]);
	const [vendorData, setVendorData] = useState([]);

	const [activeTab, setActiveTab] = useState("1");

	const [taskModal, setTaskModal] = useState(false);
	const [shopModal, setShopModal] = useState(false);
	const [vendModal, setVendModal] = useState(false);

	const toggleTab = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const toggleTask = () => setTaskModal(!taskModal);
	const toggleShop = () => setShopModal(!shopModal);
	const toggleVend = () => setVendModal(!vendModal);

	const addNewTask = () => {}

	const { className, buttonLabel } = props;

	useEffect(() => {
		let id = props.id;
		console.log(id);
		axiosWithAuth()
			.get(`/api/tasks/${id}`)
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
									<Button color="primary" onClick={toggleTask}>
										Add A Task{buttonLabel}
									</Button>
									<Modal isOpen={taskModal} toggle={toggleTask} className="createTask">
										<ModalHeader toggle={toggleTask}>Create an event task</ModalHeader>
										<ModalBody>
											<FormGroup>
												<Label for="task">Task:</Label>
												{"	"}
												<Input type="text" name="task" id="task" />
											</FormGroup>{" "}
											Task status:{"  "}
											<FormGroup check>
												<Label check>
													<Input type="radio" name="radio1" value="true" /> Completed
												</Label>
											</FormGroup>
											<FormGroup check>
												<Label check>
													<Input type="radio" name="radio1" defaultChecked value="false" /> Incomplete
												</Label>
											</FormGroup>{" "}
										</ModalBody>
										<ModalFooter>
											<Button color="primary" onClick={toggleShop}>
												Submit
											</Button>{" "}
											<Button color="secondary" onClick={toggleShop}>
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
									<Button color="primary" onClick={toggleShop}>
										Add An Item
									</Button>
									<Modal isOpen={shopModal} toggle={toggleShop} className="createItem">
										<ModalHeader toggle={toggleShop}>Modal title</ModalHeader>
										<ModalBody>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
											voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
											deserunt mollit anim id est laborum.
										</ModalBody>
										<ModalFooter>
											<Button color="primary" onClick={toggleShop}>
												Submit
											</Button>{" "}
											<Button color="secondary" onClick={toggleShop}>
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
									<Button color="primary" onClick={toggleVend}>
										Add A Vendor
									</Button>
									<Modal isOpen={vendModal} toggle={toggleVend} className="createVendor">
										<ModalHeader toggle={toggleVend}>Vendor Information</ModalHeader>
										<ModalBody>
											<FormGroup>
												<Label for="vendorName" hidden>
													Task:
												</Label>
												{"	"}
												<Input type="text" name="vendorName" id="vendorName" />
											</FormGroup>
											<FormGroup>
												<Label for="vendorEmail">Email</Label>
												{"  "}
												<Input type="email" name="email" id="vendorEmail" placeholder="Email" />
											</FormGroup>
											<FormGroup>
												<Label for="vendorContact">Phone Number</Label>
												{"  "}
												<Input type="number" name="contactNumber" id="vendorContact" placeholder="Contact Number" />
											</FormGroup>
										</ModalBody>
										<ModalFooter>
											<Button color="primary" onClick={toggleVend}>
												Submit
											</Button>{" "}
											<Button color="secondary" onClick={toggleVend}>
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

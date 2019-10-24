import React, { useState, useEffect } from "react";
import axios from "axios";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import classnames from "classnames";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { TaskList } from "./TaskList";
import { ShoppingList } from "./ShoppingList";
import { VendorList } from "./VendorList";

const Lists = () => {
	const [taskData, setTaskData] = useState([]);
	const [shoppingData, setShoppingData] = useState([]);
	const [vendorData, setVendorData] = useState([]);
	const [activeTab, setActiveTab] = useState("1");

	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	useEffect(() => {
		axios.all([
			axiosWithAuth()
				.get("/api/tasks")
				.then(res => {
					console.log(res);
					setTaskData(res.data);
				})
				.catch(error => {
					console.log(error);
				}),
			axiosWithAuth()
				.get("/api/shopping")
				.then(res => {
					console.log(res);
					setShoppingData(res.data);
				})
				.catch(error => {
					console.log(error);
				}),
			axiosWithAuth()
				.get("/api/vendors")
				.then(res => {
					console.log(res);
					setVendorData(res.data);
				})
				.catch(error => {
					console.log(error);
				})
		]);
	}, []);

	// return (
	// 	<div>
	// 		<div>
	// 			<ol>
	// 				{taskData.map(task => (
	// 					<TaskList key={task.event_id} taskName={task.task_name} taskCompletion={task.task_completed} />
	// 				))}
	// 			</ol>
	// 			<button>Add A Task</button>
	// 		</div>
	// 		<div>
	// 			<ol>
	// 				{shoppingData.map(item => (
	// 					<ShoppingList key={item.event_id} itemName={item.item_name} itemPrice={item.item_price} itemStock={item.item_acquired} />
	// 				))}
	// 			</ol>
	// 			<button>Add An Item</button>
	// 		</div>
	// 		<div>
	// 			<ol>
	// 				{vendorData.map(vendor => (
	// 					<VendorList key={vendor.event_id} vendorName={vendor.vendor_name} vendorPhone={vendor.contact_number} vendorEmail={vendor.contact_email} />
	// 				))}
	// 			</ol>
	// 			<button>Add A Vendor</button>
	// 		</div>
	// 	</div>
	// );
	return (
		<div>
			<Nav tabs>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "1" })}
						onClick={() => {
							toggle("1");
						}}>
						Tasks
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "2" })}
						onClick={() => {
							toggle("2");
						}}>
						Shopping List
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "3" })}
						onClick={() => {
							toggle("3");
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
								<h3>Tasks for all events</h3>
								<ol>
									{taskData.map(task => (
										<TaskList key={task.event_id} taskName={task.task_name} taskCompletion={task.task_completed} />
									))}
								</ol>
								<button>Add A Task</button>
							</div>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="2">
					<Row>
						<Col sm="6">
							<div>
								<h3>Shopping list for all events</h3>
								<ol>
									{shoppingData.map(item => (
										<ShoppingList key={item.event_id} itemName={item.item_name} itemPrice={item.item_price} itemStock={item.item_acquired} />
									))}
								</ol>
								<button>Add An Item</button>
							</div>
						</Col>
						{/* <Col sm="6">
				  <Card body>
					<CardTitle>Special Title Treatment</CardTitle>
					<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
					<Button>Go somewhere</Button>
				  </Card>
				</Col> */}
					</Row>
				</TabPane>
				<TabPane tabId="3">
					<Row>
						<Col sm="12">
							<div>
								<h3>Vendors for all events</h3>
								<ol>
									{vendorData.map(vendor => (
										<VendorList key={vendor.event_id} vendorName={vendor.vendor_name} vendorPhone={vendor.contact_number} vendorEmail={vendor.contact_email} />
									))}
								</ol>
								<button>Add A Vendor</button>
							</div>
						</Col>
					</Row>
				</TabPane>
			</TabContent>
		</div>
	);
};

export default Lists;

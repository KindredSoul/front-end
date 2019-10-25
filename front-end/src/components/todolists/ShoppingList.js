import React from "react";

export const ShoppingList = props => {
	const { itemName, itemPrice, itemStock } = props;
	return (
		<div>
			<li>Item: {itemName[0].toUpperCase() + itemName.slice(1)}</li>
			<div>Price: {itemPrice}</div>
			<div>In stock: {itemStock ? "Yes" : "No"}</div>
			<button>Edit</button>
			<button>Delete</button>
		</div>
	);
};

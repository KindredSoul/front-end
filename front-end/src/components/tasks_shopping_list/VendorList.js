import React from "react";

export const VendorList = props => {
	const { vendorName, vendorPhone, vendorEmail } = props;
	return (
		<div>
			<li>Name: {vendorName[0].toUpperCase() + vendorName.slice(1)}</li>
			<div>Phone: {vendorPhone}</div>
			<div>Email: {vendorEmail}</div>
		</div>
	);
};

import React from "react";
import "./TaskDetails.css";
import { useDocument } from "../../hooks/useDocument";
import { useParams } from "react-router-dom";

export default function TaskDetails() {
	const { id } = useParams();
	const { doc, error } = useDocument("projects", id);

	if (error) {
		return <div className="error">{error}</div>;
	}

	if (!doc) {
		return <div className="loading">Loading task...</div>;
	}

	const users = doc.assignedUsers.map((user) => (
		<li className="assigned-users" key={user.imageURL}>
			<img className="assigned-users-img" src={user.photoURL} alt="user" />
			<span>{user.displayName}</span>
		</li>
	));

	return (
		<div className="task">
			<h1>Project Details</h1>
			<div className="task-info">
				<h3 className="task-name details">{doc.name}</h3>
				<hr />
				<p className="task-category">{doc.category}</p>
				<p className="task-creator">Created By: {doc.createdBy.displayName}</p>
				<p className="task-details">{doc.details}</p>
				<hr />
				<p className="task-assigned">{users}</p>
			</div>
		</div>
	);
}

import React from "react";
import "./TaskList.css";

export default function TaskList({ doc }) {
	console.log(doc);

	const users = doc.assignedUsers.map((user) => `${user.displayName} `);

	return (
		<div className="projects">
			<div className="project-card">
				<h3>{doc.name}</h3>
				<span className="assigned">{users}</span>
				<hr />
				<span>{doc.category}</span>
			</div>
		</div>
	);
}

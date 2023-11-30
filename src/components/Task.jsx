import React from "react";
import "./Task.css";
import { Link } from "react-router-dom";

export default function Task({ doc }) {
	console.log(doc);

	const users = doc.assignedUsers.map((user) => `${user.displayName} `);

	return (
		<div className="projects">
			<Link to={`/projects/${doc.id}`}>
				<div className="project-card">
					<div className="title">
						<h3 className="task-name">{doc.name}</h3>
						<span className="created-by">
							From: {doc.createdBy.displayName}
						</span>
					</div>
					<hr />
					<p className="category">{doc.category}</p>
					<p className="details">{doc.details}</p>
					<span className="comments">Comments: {doc.comments.length}</span>
					<hr />
					<p className="assigned-to">For: {doc.createdBy.displayName}</p>
					<p className="due-by">Due: {doc.dueDate.toDate().toDateString()}</p>
				</div>
			</Link>
		</div>
	);
}

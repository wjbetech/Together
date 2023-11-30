import React from "react";
import "./Task.css";
import { Link } from "react-router-dom";
import { createFactory } from "react";

export default function Task({ doc }) {
	console.log(doc);

	const users = doc.assignedUsers.map((user) => (
		<li className="assigned-users" key={user.imageURL}>
			<img className="assigned-users-img" src={user.photoURL} alt="user" />
			<span>{user.displayName}</span>
		</li>
	));

	return (
		<div className="projects">
			<Link to={`/projects/${doc.id}`}>
				<div className="project-card">
					<div className="title">
						<h3 className="task-name">{doc.name}</h3>
					</div>
					<hr />
					<p className="category">{doc.category}</p>
					<p className="details">{doc.details}</p>
					<span className="comments">Comments: {doc.comments.length}</span>
					<hr />
					<p className="assigned-to">{users}</p>
					<p className="due-by">Due: {doc.dueDate.toDate().toDateString()}</p>
				</div>
			</Link>
		</div>
	);
}

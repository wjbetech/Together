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

	console.log(doc);

	return (
		<div className="task">
			<h1>Project Details</h1>
			<div className="task-details">
				<h3 className="task-name details">{doc.name}</h3>
				<hr />
				<p>Created By: -</p>
				<p>Description</p>
			</div>
		</div>
	);
}

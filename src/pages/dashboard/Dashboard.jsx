import React from "react";
import "./Dashboard.css";
import { useCollection } from "../../hooks/useCollection";
import Task from "../../components/Task";

export default function Dashboard() {
	const { documents, error } = useCollection("projects");
	return (
		<>
			<h1>Tasks</h1>
			<div className="dashboard">
				{error && <div className="error">{error}</div>}
				{documents ? (
					documents.map((doc) => <Task key={doc.id} doc={doc} />)
				) : (
					<div>No projects found!</div>
				)}
			</div>
		</>
	);
}

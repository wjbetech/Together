import React from "react";
import "./Dashboard.css";
import { useCollection } from "../../hooks/useCollection";
import TaskList from "../../components/TaskList";

export default function Dashboard() {
	const { documents, error } = useCollection("projects");
	return (
		<div className="dashboard">
			<h1>Tasks</h1>
			{error && <div className="error">{error}</div>}
			{documents ? (
				documents.map((doc) => <TaskList doc={doc} />)
			) : (
				<div>No projects found!</div>
			)}
		</div>
	);
}

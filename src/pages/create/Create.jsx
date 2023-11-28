import React from "react";
import { useState } from "react";
import "./Create.css";
import Select from "react-select";
import { useAuthContext } from "../../hooks/useAuthContext";

// categories for category select
const categories = [
	{ value: "Development", label: "Development" },
	{ value: "Design", label: "Design" },
	{ value: "Sales", label: "Sales" },
	{ value: "Marketing", label: "Marketing" },
];

const users = [];

export default function Create() {
	const [name, setName] = useState("");
	const [details, setDetails] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [category, setCategory] = useState("");
	const [assignedUsers, setAssignedUsers] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, details, dueDate, category.value);
	};

	return (
		<div className="create-form">
			<h2 className="page-title">Create Task</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Task Name</span>
					<input
						required
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					<span>Details</span>
					<textarea
						required
						res
						value={details}
						onChange={(e) => setDetails(e.target.value)}
					/>
				</label>
				<label>
					<span>Due Date</span>
					<input
						required
						type="date"
						value={dueDate}
						onChange={(e) => setDueDate(e.target.value)}
					/>
				</label>
				<label>
					<span>Category</span>
					<Select
						options={categories}
						value={category}
						onChange={(option) => setCategory(option)}
					/>
				</label>
				<label>
					<span>Assign To</span>
					<Select
						options={users}
						value={assignedUsers}
						onChange={(e) => setAssignedUsers(e.target.value)}
					/>
				</label>
				<button type="submit" className="btn">
					Add Task
				</button>
			</form>
		</div>
	);
}

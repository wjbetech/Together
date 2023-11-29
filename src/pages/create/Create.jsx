import React, { useEffect } from "react";
import { useState } from "react";
import "./Create.css";
import Select from "react-select";
import { useHistory } from "react-router";
import { useCollection } from "../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

const categories = [
	{ value: "Development", label: "Development" },
	{ value: "Design", label: "Design" },
	{ value: "Sales", label: "Sales" },
	{ value: "Marketing", label: "Marketing" },
];

export default function Create() {
	const history = useHistory();
	// state setters
	const [name, setName] = useState("");
	const [details, setDetails] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [category, setCategory] = useState("");
	const [assignedUsers, setAssignedUsers] = useState([]);

	// categories for category select

	// misc hooks
	const { documents } = useCollection("users");
	const { addDocument, response } = useFirestore("projects");
	const [users, setUsers] = useState([]);
	const { user } = useAuthContext();

	// misc handlers
	const [formError, setFormError] = useState(null);

	// provide dynamic users list for assigning users
	useEffect(() => {
		if (documents) {
			const options = documents.map((user) => {
				return { value: user, label: user.displayName };
			});
			setUsers(options);
		}
	}, [documents]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setFormError(null);

		if (!category) {
			setFormError("Please select a category.");
			return;
		}

		if (assignedUsers.length < 1) {
			setFormError("Please assign at least one user.");
			return;
		}

		// clean up createdBy
		const createdBy = {
			displayName: user.displayName,
			photoURL: user.photoURL,
			id: user.uid,
		};

		// clean up assignedUsers
		const assignedUsersList = assignedUsers.map((user) => {
			return {
				displayName: user.value.displayName,
				photoURL: user.value.photoURL,
				id: user.value.id,
			};
		});

		// new task for POSTing
		const newProject = {
			name,
			details,
			category: category.value,
			dueDate: timestamp.fromDate(new Date(dueDate)),
			comments: [],
			assignedUsers: assignedUsersList,
			createdBy,
		};

		await addDocument(newProject);

		if (!response.error) {
			history.push("/");
		}
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
						onChange={(option) => setAssignedUsers(option)}
						options={users}
						isMulti
					/>
				</label>
				<button type="submit" className="btn">
					Add Task
				</button>

				{/* errors */}
				{formError && <p className="error">{formError}</p>}
			</form>
		</div>
	);
}

import React from "react";
import "./Signup.css";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
	// state setters
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayName, setDisplayName] = useState("");
	const [thumbnail, setThumbnail] = useState(null);
	const [thumbnailError, setThumbnailError] = useState(null);

	// deconstruct the signup hook
	const { signup, isPending, error } = useSignup();

	// handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// !! order is important !!
		signup(email, password, displayName, thumbnail);
	};

	// sanitizing file inputs
	const handleFileChange = (e) => {
		// reset any previous data
		setThumbnail(null);

		// sanitize file input
		const file = e.target.files[0];

		// placeholder file if no image selected
		if (!file) {
			setThumbnail(
				"https://kluppy.com/wp-content/plugins/tutor/assets/images/placeholder-course.svg",
			);
			return;
		}

		// check file is image
		if (!file.type.includes("image")) {
			setThumbnailError("Selected file must be an image.");
			return;
		}

		// check file size
		if (file.size > 100000) {
			setThumbnailError(
				"File size is too large (files must be less than 100kb).",
			);
			return;
		}

		setThumbnailError(null);
		setThumbnail(file);
		console.log("Thumbnail updated.");
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h2>Sign Up</h2>
			<label>
				<span>Email:</span>
				<input
					required
					type="email"
					name="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			<label>
				<span>Password:</span>
				<input
					required
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>
			<label>
				<span>Display Name:</span>
				<input
					required
					type="text"
					name="display-name"
					id="display-name"
					value={displayName}
					onChange={(e) => setDisplayName(e.target.value)}
				/>
			</label>
			<label>
				<span>Profile Picture:</span>
				<input
					type="file"
					name="profile-picture"
					id="profile-picture"
					onChange={handleFileChange}
				/>
				{thumbnailError && <div className="error">{thumbnailError}</div>}
			</label>
			{isPending ? (
				<button disabled type="submit" className="btn">
					Signing Up..
				</button>
			) : (
				<button type="submit" className="btn">
					Sign Up
				</button>
			)}
			{error && <div className="error">{error}</div>}
		</form>
	);
}

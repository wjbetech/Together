import React from "react";
import "./Signup.css";
import { useState } from "react";

export default function Signup() {
	// state setters
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayName, setDisplayName] = useState("");
	const [thumbnail, setThumbnail] = useState(null);

	return (
		<form className="form">
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
				<input type="file" name="profile-picture" id="profile-picture" />
			</label>
			<button type="submit" className="btn">
				Submit
			</button>
		</form>
	);
}

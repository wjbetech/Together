import React, { useState } from "react";
import "./Login.css";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
	// state setters
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// deconstruct login hook
	const { login, isPending, error } = useLogin();

	// handle submitting the login form
	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h2>Login</h2>
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
			{isPending ? (
				<button disabled type="submit" className="btn">
					Logging in..
				</button>
			) : (
				<button type="submit" className="btn">
					Login
				</button>
			)}
			{error && <div className="error">{error}</div>}
		</form>
	);
}

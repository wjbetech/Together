import React from "react";
import "./Login.css";

export default function Login() {
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

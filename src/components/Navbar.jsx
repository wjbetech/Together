import React from "react";
import "./Navbar.css";
import { IoPeopleCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
	// grab the logout functionality from useLogout hook
	const { logout, isPending } = useLogout();

	// grab user status
	const { user } = useAuthContext();

	return (
		<div className="navbar">
			<ul>
				{/* navbar - left side */}
				<li className="logo">
					<Link to="/">
						<div className="icon">
							<IoPeopleCircle />
						</div>
						<span>Together</span>
					</Link>
				</li>

				{/* navbar - right side */}
				{/* only render Login and Signup when no actively logged in user */}
				{!user && (
					<>
						<li className="hover-underline">
							<Link to="/login">Login</Link>
						</li>
						<li className="hover-underline">
							<Link to="/sign-up">Signup</Link>
						</li>
					</>
				)}
				{/* only render Logout when there is an actively logged in user */}
				{user && (
					<>
						<li>
							{!isPending && (
								<button type="submit" className="btn" onClick={logout}>
									Logout
								</button>
							)}
							{isPending && (
								<button type="submit" className="btn" disabled>
									Logging out...
								</button>
							)}
						</li>
					</>
				)}
			</ul>
		</div>
	);
}

import React from "react";
import "./Navbar.css";
import { IoPeopleCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
	// grab the logout functionality from useLogout hook
	const { logout, isPending } = useLogout();

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
				<li className="hover-underline">
					<Link to="/login">Login</Link>
				</li>
				<li className="hover-underline">
					<Link to="/sign-up">Signup</Link>
				</li>
				<li>
					{!isPending ? (
						<button className="btn" type="button" onClick={logout}>
							Logout
						</button>
					) : (
						<button className="btn" type="button" onClick={logout} disabled>
							Logging Out..
						</button>
					)}
				</li>
			</ul>
		</div>
	);
}

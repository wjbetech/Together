import React from "react";
import "./Navbar.css";
import { IoPeopleCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
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
				<li className="btn">Logout</li>
			</ul>
		</div>
	);
}

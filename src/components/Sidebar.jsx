import React from "react";
import "./Sidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Sidebar() {
	const { user } = useAuthContext();

	return (
		<div className="sidebar">
			<div className="sidebar-content">
				<div className="user">
					{/* avatar + username */}
					{user && (
						<div className="user-info">
							<img src={user.photoURL} alt="" />
							<p className="display-name">Hey {user.displayName}!</p>
						</div>
					)}
					{!user && <p>Welcome!</p>}
				</div>
				<nav className="links">
					<ul>
						<li>
							<NavLink exact to="/">
								<MdOutlineDashboard />
								<span>Dashboard</span>
							</NavLink>
							<NavLink to="/create">
								<IoCreate />
								<span>Create Project</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

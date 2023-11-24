import React from "react";
import "./Sidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar-content">
				<div className="user">
					{/* avatar + username */}
					<p>Hi, User</p>
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

import React from "react";
import "./OnlineUsers.css";
import { documents, error, useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";

export default function OnlineUsers() {
	const { error, documents } = useCollection("users");

	const { user } = useAuthContext();
	return (
		<div className="user-list">
			<h2>All Users</h2>
			{error && <div className="error">{error}</div>}
			<div className="people">
				{documents?.map((user) => (
					<div key={user.id} className="person">
						<div className={`status ${user.online ? "online" : "offline"}`} />
						<div className="person-details">
							<span>{user.displayName}</span>
							<img src={user.photoURL} alt={user.displayName} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

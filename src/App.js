import "./App.css";

// import components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import OnlineUsers from "./components/OnlineUsers";

// import all pages
import Create from "./pages/create/Create";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import TaskDetails from "./pages/task-details/TaskDetails";
import Signup from "./pages/sign-up/Signup";

// import react-router-dom functionality
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// auth for conditional link rendering
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
	const { user, authIsReady } = useAuthContext();

	return (
		<div className="App">
			{authIsReady && (
				<BrowserRouter>
					<Sidebar />
					<div className="container">
						<Navbar />
						<div className="inner-container">
							<Switch>
								<Route exact path="/">
									{/* conditionally render dashboard 
									only if a user is logged in */}
									{user && <Dashboard />}
									{/* otherwise redirect to login */}
									{!user && <Redirect to="/login" />}
								</Route>
								<Route path="/create">
									{!user && <Redirect to="/login" />}
									{user && <Create />}
								</Route>
								<Route path="/login">
									{user && <Redirect to="/" />}
									{!user && <Login />}
								</Route>
								<Route path="/sign-up">
									{user && <Redirect to="/" />}
									{!user && <Signup />}
								</Route>
								<Route path="/tasks/:id">
									{!user && <Redirect to="/login" />}
									{user && <TaskDetails />}
								</Route>
							</Switch>
						</div>
					</div>
					{user && <OnlineUsers />}
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;

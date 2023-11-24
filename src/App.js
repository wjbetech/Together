import "./App.css";

// import react-router-dom functionality
import {
	BrowserRouter,
	Route,
	Switch,
} from "react-router-dom/cjs/react-router-dom.min";

// import components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// import all pages
import Create from "./pages/create/Create";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import ProjectDetails from "./pages/project-details/ProjectDetails";
import Signup from "./pages/sign-up/Signup";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Sidebar />
				<div className="container">
					<Navbar />
					<div className="inner-container">
						<Switch>
							<Route exact path="/">
								<Dashboard />
							</Route>
							<Route path="/create">
								<Create />
							</Route>
							<Route path="/login">
								<Login />
							</Route>
							<Route path="/sign-up">
								<Signup />
							</Route>
							<Route path="/projects/:id">
								<ProjectDetails />
							</Route>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { HomeButton } from "./HomeButton";

function Application() {
	return (
		<BrowserRouter>
			<HomeButton />
			<Switch>
				<Route path={"/chat"}>
					<h1>Chatroom</h1>
				</Route>
				<Route path={"/register"}>
					<h1>Register a new user</h1>
				</Route>
				<Route path={"/userlist"}>
					<h1>List of users</h1>
				</Route>
				<Route exact path={"/"}>
					<h1>Chat Application</h1>
					<ul>
						<li>
							<Link to={"/chat"}>Enter Chatroom</Link>
						</li>
						<li>
							<Link to={"/register"}>Register a new user</Link>
						</li>
						<li>
							<Link to={"/userlist"}>List of users</Link>
						</li>
					</ul>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

ReactDOM.render(<Application />, document.getElementById("root"));

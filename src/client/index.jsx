import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { HomeButton } from "./HomeButton";
import { UserListPage } from "./UserListPage";
import { UserRegister } from "./UserRegisterPage";

function Application() {
	return (
		<BrowserRouter>
			<HomeButton />
			<Switch>
				<Route path={"/chat"}>
					<h1>Chatroom</h1>
				</Route>
				<Route path={"/register"}>
					<UserRegister />
				</Route>
				<Route path={"/userlist"}>
					<UserListPage />
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

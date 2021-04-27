import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { ChatPage } from "./ChatPage";
import { HomeButton } from "./HomeButton";
import { UserListPage } from "./UserListPage";
import { UserRegister } from "./UserRegisterPage";
import './styles/chatPageStyles.css';

function Application() {
	return (
		<BrowserRouter>
			<HomeButton />
			<Switch>
				<Route path={"/chat"}>
					<ChatPage />
				</Route>
				<Route path={"/register"}>
					<UserRegister />
				</Route>
				<Route path={"/userlist"}>
					<UserListPage />
				</Route>
				<Route exact path={"/"}>
					<h1>PG6301 Exam</h1>
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

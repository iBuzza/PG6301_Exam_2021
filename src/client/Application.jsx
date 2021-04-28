import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { ChatPage } from "./ChatPage";
import { HomeButton } from "./HomeButton";
import { UserListPage } from "./UserListPage";
import { UserRegister } from "./UserRegisterPage";
import { LoginPage } from "./LoginPage";
import { UserProfile } from './UserProfilePage';
import './styles/chatPageStyles.css';

export function Application() {
	return (
		<BrowserRouter>
			<HomeButton />
			<Switch>
      <Route path="/login">
          <LoginPage />
        </Route>
				<Route path="/profile">
          <UserProfile />
        </Route>
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
							<Link to={"/login"}>Login</Link>
						</li>
						<li>
							<Link to={"/profile"}>Profile</Link>
						</li>
						<li>
							<Link to={"/chat"}>Enter Chatroom</Link>
						</li>
						<li>
							<Link to={"/register"}>Register a new user</Link>
						</li>
						<li>
							<Link to={"/userlist"}>Users</Link>
						</li>
					</ul>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
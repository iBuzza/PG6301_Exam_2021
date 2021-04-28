import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";


export function HomeButton() {
	return (
		<BrowserRouter>
		<Route>
		<nav>
			<button>
				<Link to={"/"}>Home</Link>
			</button>
		</nav>
		</Route>
		</BrowserRouter>
	);
}

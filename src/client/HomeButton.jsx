import React from "react";
import { Link } from "react-router-dom";

export function HomeButton() {
	return (
		<nav>
			<button>
				<Link to={"/"}>Home</Link>
			</button>
		</nav>
	);
}

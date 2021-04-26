import React, { useState } from "react";

export function UserRegister() {
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [email, setEmail] = setState("");

	async function submit(e) {
		e.preventDefault();
		console.log("Submitting", { firstname, lastname, email });
		await fetch("/api/users", {
			method: "POST",
			body: JSON.stringify({ firstname, lastname, email }),
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	return (
		<form onSubmit={submit}>
			<div>
				<label>
					First Name:
					<input type="text" />
				</label>
			</div>
			<div>
				<label>
					Last Name
					<input type="text" />
				</label>
			</div>
			<div>
				<label>
					Email:
					<input type="email" />
				</label>
			</div>
			<button>Submit</button>
		</form>
	);
}

import logo from "./logo.svg";
import "./App.css";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "./aws-exports";
import {
	createTerraformDevUser,
	updateTerraformDevUser,
} from "./graphql/mutations";
import { onCreateTerraformDevUser, onUpdateTerraformDevUser } from "./graphql/subscriptions";
import { useEffect } from "react";

Amplify.configure(awsmobile);

function App() {
	const createUser = async () => {
		const user = {
			user_id: "Disha",
			type: "admin",
		};

		const response = await API.graphql(
			graphqlOperation(createTerraformDevUser, { input: user })
		);

		console.log("Response: ", response);
	};

	const modifyUser = async () => {
		const user = {
			user_id: "Disha",
			type: "home owner",
		};

		const response = await API.graphql(
			graphqlOperation(updateTerraformDevUser, { input: user })
		);

		console.log("Response: ", response);
	};

	const subscriptions = API.graphql(
		graphqlOperation(onUpdateTerraformDevUser)
	).subscribe({
		next: (userData) => {
			console.log("Subscription Data: ", userData);
		},
	});

	useEffect(() => {
		// createUser();
		modifyUser();
	}, []);

	useEffect(() => {
		subscriptions.unsubscribe();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>AppSync with Amplify Demo</p>
			</header>
		</div>
	);
}

export default App;

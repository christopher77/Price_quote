import { Router } from "@reach/router";
import "./App.css";
import Auto from "./views/Auto/Auto";
import Home from "./views/Home/Home";
import Plan from "./views/Plan/Plan";
import Success from "./views/Success/Success";

function App() {
	return (
		<Router>
			<Home path="/" />
			<Auto path="/auto" />
			<Plan path="/plan" />
			<Success path="/success" />
		</Router>
	);
}

export default App;

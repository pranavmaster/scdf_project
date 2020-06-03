import React from "react";
import LoginPage from "./LoginPage";
import RegisterPage from './RegisterPage';
import MainPage from './MainPage';
import { Router, Route , Switch } from "react-router-dom";

import Header from "./Header";
import history from "../history";

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
                    <Switch/>
					<Route path="/" exact component={LoginPage} />
					<Route path="/register" exact component={RegisterPage} />
					<Route path ='/main/:id' exact component= {MainPage}/>
                    <Switch/>

				</div>
			</Router>
		</div>
	);
};

export default App;




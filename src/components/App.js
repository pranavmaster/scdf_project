import React from "react";
import LoginPage from "./LoginPage";
import RegisterPage from './RegisterPage';
import MainPage from './MainPage';
import AlertPage from './AlertPage'
import { Router, Route , Switch } from "react-router-dom";


import history from "../history";


const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					
                    <Switch/>
					<Route path="/" exact component={LoginPage} />
					<Route path = '/main/alert/:id' exact component = {AlertPage}/>
					<Route path="/register" exact component={RegisterPage} />
					<Route path ='/main/:id' exact component= {MainPage}/>
                    <Switch/>

				</div>
			</Router>
		</div>
	);
};

export default App;




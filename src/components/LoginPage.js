import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions";
import { Link } from "react-router-dom";
import UserForm from "./Form";
import GoogleAuth from "./GoogleAuth";

class LoginPage extends React.Component {
	onSubmit = (formValues) => {
		this.props.loginUser(formValues);
	};

	render() {
		return (
			<div>
				<h3>Login</h3>
				<UserForm onSubmit={this.onSubmit} />
				<Link to="/register">Don't have an account? Go register!</Link>
				<h4>Or you can sign in with Google!</h4>
				<GoogleAuth/>
			</div>
		);
	}
}

export default connect(null, { loginUser })(LoginPage);




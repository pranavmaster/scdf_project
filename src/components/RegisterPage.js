import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions";
import UserForm from "./Form";

class RegisterPage extends React.Component {
	onSubmit = (formValues) => {
		this.props.registerUser(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create A User</h3>
				<UserForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { registerUser })(RegisterPage);

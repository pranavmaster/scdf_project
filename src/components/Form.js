import React from "react";
import { Field, reduxForm } from "redux-form";

class UserForm extends React.Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? "error" : ""}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form error"
			>
				<Field
					name="NRIC"
					component={this.renderInput}
					label="Enter NRIC"
				/>
				<Field
					name="Password"
					component={this.renderInput}
					label="Enter Password"
				/>
				<button className="ui button primary">Log in with Singpass</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.NRIC) {
		errors.NRIC = "You must enter a NRIC";
		//only ran if user did not enter title
	}

	if (!formValues.Password) {
		errors.Password = "You must enter a password";
	}

	return errors;
};

export default reduxForm({
	form: "userForm",
	validate,
})(UserForm);

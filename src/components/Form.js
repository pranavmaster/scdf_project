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

	onSubmit=(formValues)=> {
		this.props.onSubmit(formValues);
	}

	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form error"
			>
				<Field name="UserName" component={this.renderInput} label="Enter Username" />
				<Field
					name="Password"
					component={this.renderInput}
					label="Enter Password"
				/>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.user) {
		errors.user = "You must enter a User";
		//only ran if user did not enter title
	}

	if (!formValues.password) {
		errors.password = "You must enter a description";
	}

	return errors;
};

export default reduxForm({
	form: "userForm",
	validate
})(UserForm);



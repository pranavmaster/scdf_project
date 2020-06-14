import React from "react";
import { Field, reduxForm } from "redux-form";

class RegisterForm extends React.Component {
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
				<Field name="NRIC" component={this.renderInput} label="Enter NRIC" />
                <Field name="FullName" component={this.renderInput} label="Enter Full Name" />
				<Field
					name="Address"
					component={this.renderInput}
					label="Enter Address"
				/>
				<label>If you are older than 60 please select old</label>
				<div>
					<label>
						<Field name="sex" component="input" type="radio" value="Old" /> Old
					</label>
					<label>
						<Field name="sex" component="input" type="radio" value="Young" />{" "}
						Young
					</label>
				</div>

				<Field
					name="Password"
					component={this.renderInput}
					label="Enter Password"
				/>
				<button className="ui button primary">Register</button>
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
    if (!formValues.FullName) {
		errors.FullName = "You must enter your Full Name";
		//only ran if user did not enter title
	}
	if (!formValues.Address) {
		errors.user = "You must enter a Address";
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
})(RegisterForm);

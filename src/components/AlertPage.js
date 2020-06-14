import React from "react";
import { Dropdown } from "semantic-ui-react";
import Header from "./Header";
import { connect } from "react-redux";

class AlertPage extends React.Component {
	render() {
		return (
			<>
				<Header />
				<div>
					<label>
						Search up a user by their full name to add under your emergency
						contact list
					</label>
					<Dropdown placeholder="Select User" fluid selection />
					<form>
						<label>
							Update your medical conditions:
							<input type="text" name="name" />
						</label>
						
					</form>
					<button>Submit</button>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		users: state.users[ownProps.match.params.id],
	};
};
export default connect(mapStateToProps, null)(AlertPage);

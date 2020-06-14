import React from "react";
import { connect } from "react-redux";

import Header from "./Header";

class MainPage extends React.Component {
	render() {
		console.log(this.props.users);
		return (
			<>
				<Header />
				<div>
					<div>Welcome</div>
					<div>{this.props.users.FullName}</div>
					<div>
						<button className="ui circular negative icon button">
							<i className="bell icon" size="lg"></i>
						</button>
					</div>
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
export default connect(mapStateToProps, null)(MainPage);

import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/main/:id" className="item">
				Main
			</Link>
			<Link to='/main/alert/:id' className = "item">
				Alert
			</Link>
			<div className="right menu">
				<Link to= "/" className="item">
                    Logout
                </Link>
			</div>
		</div>
	);
};

export default Header;

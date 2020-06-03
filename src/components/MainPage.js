import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { Link } from "react-router-dom";
import FinanceForm from "./FinanceForm"


class MainPage extends React.Component{



    renderList(){
        return(
        <>
        <div>
            Welcome
        </div>
        <div>
            {this.props.users.UserName}
        </div>
        <div>
            <FinanceForm/>
        </div>
        </>
        )
    }

    render(){
        console.log(this.props.users.UserName)
        return(
            
            <div>
                <div className="ui celled list">{this.renderList()}</div>
            </div>

        )
    }
}


const mapStateToProps = (state ,ownProps) => {
	return {
        users:state.users[ownProps.match.params.id]
	};
};
export default connect(mapStateToProps, null)(MainPage);

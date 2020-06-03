import { REGISTER_USER, LOGIN_USER } from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
	switch (action.type) {
		case REGISTER_USER:
			return { ...state, [action.payload.id]: action.payload };
		case LOGIN_USER:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
};

import { REGISTER_USER, LOGIN_USER , SIGN_IN,SIGN_OUT } from "./types";
import users from "../apis/users";
import history from "../history";

export const registerUser = (formValues) => async (dispatch) => {
	const response = await users.post("/users", { ...formValues});
	// only care about the data from the response object from axios
	dispatch({ type: REGISTER_USER, payload: response.data });
	//do some programmatic navigation to get the user to the root route
	history.push("/");
};

export const loginUser = (formValues) => async (dispatch) => {
    const response = await users.get("/users")
    //to filter users based on their password and username and map it to the form in login
    const user = response.data.filter(element => element.Password === formValues.Password && element.NRIC === formValues.NRIC)
	if (user[0] !== null && user[0] !== undefined) {
        dispatch({ type: LOGIN_USER, payload:user[0]  });
        const id = user[0].id
		history.push(`/main/${id}`);
	} else {
		history.push("/");
	}
};




// export const signIn = (formValues) =>async(dispatch)=> {
//     const response = await users.get("/users")
// 	return {
// 		type: SIGN_IN,
// 		payload: id,
// 	};
// };

// export const signOut = () => {
//     history.push("/")
// 	return {
// 		type: SIGN_OUT,
// 	};
// };

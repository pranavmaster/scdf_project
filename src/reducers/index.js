import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import {reducer as formReducer} from 'redux-form';
import authReducer from "./authReducer";

export default combineReducers({
  auth:authReducer,
  users: usersReducer,
  form:formReducer
});

import { combineReducers } from "redux";

import authReducer from "./authReducer.jsx";
import postReducer from "./postReducer.jsx";

export const reducers = combineReducers({ authReducer, postReducer })
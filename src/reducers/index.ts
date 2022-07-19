import authReducer from "./auth";
import { combineReducers } from "redux";
import progressReducer from "./progress";

const rootReducer = combineReducers({
  auth: authReducer,
  progress: progressReducer,
});

export default rootReducer;

import { applyMiddleware, createStore } from "redux";

import ReduxThunk from "redux-thunk";
import rootReducer from "../reducers";

const middlewares = [ReduxThunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

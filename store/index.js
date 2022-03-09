import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./reducer/users";
import thunk from "redux-thunk";
import errorReducer from "./reducer/errors";

const rootReducer = combineReducers({ 
    user: userReducer,
    error: errorReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
 
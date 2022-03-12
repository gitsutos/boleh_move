import { combineReducers, createStore, applyMiddleware } from "redux";

import userReducer from "./reducer/users";

import thunk from "redux-thunk";
import riderReducer from "./reducer/rider";
import errorReducer from "./reducer/errors";
import passengerReducer from "./reducer/passange";

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  rider: riderReducer,
  passenger: passengerReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

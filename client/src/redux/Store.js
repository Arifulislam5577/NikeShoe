import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { packageReducer } from "./Reducer";

const rootReducers = combineReducers({
  package: packageReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

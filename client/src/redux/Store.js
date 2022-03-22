import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  loginReducer,
  userOrderReducer,
  orderReducer,
  packageReducer,
  signupReducer,
  singlePackageReducer,
  adminOrderReducer,
  allUserReducer,
  updateOrderReducer,
  bigDealReducer,
  allBigDealReducer,
} from "./Reducer";

const rootReducers = combineReducers({
  package: packageReducer,
  userLogin: loginReducer,
  userSignup: signupReducer,
  singlePack: singlePackageReducer,
  order: orderReducer,
  userOrder: userOrderReducer,
  adminOrder: adminOrderReducer,
  users: allUserReducer,
  orderUpdate: updateOrderReducer,
  bigDeal: bigDealReducer,
  getBigDeal: allBigDealReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};
const middleware = [thunk];

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

import {
  PACKAGE_REQUEST,
  PACKAGE_SUCCESS,
  PACKAGE_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNOUT_SUCCESS,
} from "./Constants";

// PACKAGE REDUCERS

export const packageReducer = (state = { packages: [] }, action) => {
  switch (action.type) {
    case PACKAGE_REQUEST:
      return {
        loading: true,
        packages: [],
      };
    case PACKAGE_SUCCESS:
      return {
        loading: false,
        packages: action.payload,
      };
    case PACKAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// USER REDUCERS

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_SIGNOUT_SUCCESS:
      return {};
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const signupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return {
        loading: true,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_SIGNUP_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

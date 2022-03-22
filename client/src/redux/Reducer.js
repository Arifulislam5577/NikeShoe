import {
  PACKAGE_REQUEST,
  PACKAGE_SUCCESS,
  PACKAGE_FAIL,
  SINGLE_PACKAGE_REQUEST,
  SINGLE_PACKAGE_SUCCESS,
  SINGLE_PACKAGE_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNOUT_SUCCESS,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAIL,
  MY_ORDER_REQUEST,
  MY_ORDER_SUCCESS,
  MY_ORDER_FAIL,
  ADMIN_ORDER_REQUEST,
  ADMIN_ORDER_SUCCESS,
  ADMIN_ORDER_FAIL,
  ADMIN_USER_REQUEST,
  ADMIN_USER_SUCCESS,
  ADMIN_USER_FAIL,
  ORDER_UPDATE_REQUEST,
  ORDER_UPDATE_SUCCESS,
  ORDER_UPDATE_FAIL,
  ORDER_UPDATE_RESET,
  BIG_DEAL_REQUEST,
  BIG_DEAL_SUCCESS,
  BIG_DEAL_FAIL,
  ALL_BIG_DEAL_REQUEST,
  ALL_BIG_DEAL_SUCCESS,
  ALL_BIG_DEAL_FAIL,
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

export const singlePackageReducer = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_PACKAGE_REQUEST:
      return {
        loading: true,
      };
    case SINGLE_PACKAGE_SUCCESS:
      return {
        loading: false,
        pack: action.payload,
      };
    case SINGLE_PACKAGE_FAIL:
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

// ORDER REDUCER

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return {
        loading: true,
      };
    case ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case MY_ORDER_REQUEST:
      return {
        loading: true,
      };
    case MY_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case MY_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const adminOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_ORDER_REQUEST:
      return {
        loading: true,
      };
    case ADMIN_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ADMIN_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

// GET ALL USER BY ADMIN

export const allUserReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_USER_REQUEST:
      return {
        loading: true,
      };
    case ADMIN_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case ADMIN_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//BIG DEAL

export const bigDealReducer = (state = {}, action) => {
  switch (action.type) {
    case BIG_DEAL_REQUEST:
      return {
        loading: true,
      };
    case BIG_DEAL_SUCCESS:
      return {
        loading: false,
        deal: action.payload,
      };
    case BIG_DEAL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const allBigDealReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_BIG_DEAL_REQUEST:
      return {
        loading: true,
      };
    case ALL_BIG_DEAL_SUCCESS:
      return {
        loading: false,
        deals: action.payload,
      };
    case ALL_BIG_DEAL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

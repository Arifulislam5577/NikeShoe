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
import axios from "axios";

// PACKAGE ACTIONS
export const packageAction = () => async (dispatch) => {
  dispatch({ type: PACKAGE_REQUEST });
  try {
    const { data } = await axios.get("/api/v1/package");
    dispatch({ type: PACKAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PACKAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const singlePackageAction = (id) => async (dispatch, getState) => {
  dispatch({ type: SINGLE_PACKAGE_REQUEST });
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/package/${id}`, config);
    dispatch({ type: SINGLE_PACKAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SINGLE_PACKAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

// USER LOGIN
export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/v1/user/signin",
      {
        email,
        password,
      },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

// USER SIGNUP
export const signupAction = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST, payload: { name, email, password } });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/v1/user/signup",
      { name, email, password },
      config
    );
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

// USER SIGNOUT

export const signoutAction = () => async (dispatch) => {
  dispatch({ type: USER_SIGNOUT_SUCCESS });
  localStorage.removeItem("userInfo");
};

// TOTAL USER

export const totalUserAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_USER_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/v1/user", config);

    dispatch({ type: ADMIN_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

// ORDER

export const createOrderAction =
  (shippingInfo, billingInfo) => async (dispatch, getState) => {
    try {
      dispatch({ type: ORDER_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        "/api/v1/order",
        { shippingInfo, billingInfo },
        config
      );
      dispatch({ type: ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ORDER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };

export const OrderAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MY_ORDER_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      "/api/v1/order",

      config
    );
    dispatch({ type: MY_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MY_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const adminOrderAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_ORDER_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/v1/order/admin", config);
    dispatch({ type: ADMIN_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const updateOrderAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_UPDATE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.patch(`/api/v1/order/${id}`, config);
    dispatch({ type: ORDER_UPDATE_SUCCESS });
    dispatch({ type: ORDER_UPDATE_RESET });
  } catch (error) {
    dispatch({
      type: ORDER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const dealsAction =
  (name, email, companyName, message) => async (dispatch) => {
    try {
      dispatch({ type: BIG_DEAL_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/v1/deal`,
        { name, email, companyName, message },
        config
      );
      dispatch({ type: BIG_DEAL_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: BIG_DEAL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };

export const getDealsAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BIG_DEAL_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`/api/v1/deal`, config);
    dispatch({ type: ALL_BIG_DEAL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_BIG_DEAL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

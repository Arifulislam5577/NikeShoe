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
import axios from "axios";

// PACKAGE
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

export const signoutReducer = () => async (dispatch) => {
  dispatch({ type: USER_SIGNOUT_SUCCESS });
  localStorage.removeItem("userInfo");
};

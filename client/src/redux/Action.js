import { PACKAGE_REQUEST, PACKAGE_SUCCESS, PACKAGE_FAIL } from "./Constants";
import axios from "axios";

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

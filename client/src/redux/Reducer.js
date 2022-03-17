import { PACKAGE_REQUEST, PACKAGE_SUCCESS, PACKAGE_FAIL } from "./Constants";

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

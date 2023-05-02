import { USER_AUTHENTICATED, USER_NOT_AUTHENTICATED } from "./loginActions";

const initialState = {
  isAuthenticated: false,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
      };
    case USER_NOT_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
export const isAuthenticated = (state) => state.isAuthenticated;

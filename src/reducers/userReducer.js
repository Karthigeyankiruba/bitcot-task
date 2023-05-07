import { ADD_PRODUCT, ADD_USER, LOGIN_USER } from "../actions/types";
import sampleData from "../data";

export const initialState = {
  users: [],
  currentUser: null,
  token: localStorage.getItem("token"),
  products: sampleData,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload.user,
        token: action.payload.token,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
export const getProducts = (state) => state.login.products;

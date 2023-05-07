import { ADD_PRODUCT, ADD_USER, LOGIN_USER } from "./types";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const loginUser = (user, token) => ({
  type: LOGIN_USER,
  payload: { user, token },
});
export const addProduct = (products) => ({
  type: ADD_PRODUCT,
  payload: products,
});

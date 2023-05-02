import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./signupReducer";
import authenticationReducer from "../login/loginReducer";

const store = configureStore({
  reducer: {
    user: signupReducer,
    login: authenticationReducer,
  },
});
export default store;

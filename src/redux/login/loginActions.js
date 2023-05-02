export const CHECK_USER_AUTH = "CHECK_USER_AUTH";
export const USER_AUTHENTICATED = "USER_AUTHENTICATED";
export const USER_NOT_AUTHENTICATED = "USER_NOT_AUTHENTICATED";
export const checkUserAuth = (email, password) => {
  return (dispatch) => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.email === email &&
      storedData.password === password
    ) {
      dispatch({ type: USER_AUTHENTICATED });
    } else {
      dispatch({ type: USER_NOT_AUTHENTICATED });
    }
  };
};

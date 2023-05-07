import React from "react";
import Logo from "../../assets/images/thumbnails/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import { useDispatch } from "react-redux";

import { loginUser } from "../../actions/userAction";

const Login = () => {
  const dispatch = useDispatch();
  // const users = JSON.parse(localStorage.getItem("users")) || [];
  // const isAuthenticated = useSelector((state, action) => state.isAuthenticated);

  let navigate = useNavigate();
  const onSubmit = async (values, { setSubmitting }) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // if (isAuthenticated) {
    //   const authAction = dispatch(checkUserAuth(values.email, values.password));
    //   // console.log(authAction);
    //   if (authAction === USER_AUTHENTICATED) {
    //     navigate("/");
    //   } else {
    //     navigate("/products");
    //   }

    // setTimeout(() => {
    //   const user = users.find(
    //     (u) => u.email === values.email && u.password === values.password
    //   );
    //   if (user) {
    //     const token = "static_token"; // generate a static token
    //     dispatch(loginUser(user, token));
    //     localStorage.setItem("token", token);
    //     navigate("/products");
    //   }
    //   setSubmitting(false);
    //   alert("User not found");
    // }, 400);

    const savedEmail = localStorage.getItem("signupEmail");
    const savedPassword = localStorage.getItem("signupPassword");

    if (savedEmail === values.email && savedPassword === values.password) {
      const token = "static_token"; // generate a static token
      dispatch(loginUser(values, token));
      localStorage.setItem("token", token);
      navigate("/products");
    } else if (savedEmail !== values.email) {
      alert("User not found");
    } else {
      alert("Email or password does not match");
    }

    setSubmitting(false);
  };
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  return (
    <div id="wrapper">
      <div className="page-wrapper auth_wrapper">
        <div className="content-area-wrapper">
          <div className="content-wrapper">
            <div className="container">
              <div className="card products_blc">
                <div className="card-body">
                  <div className="card_content_wrap text-center">
                    <div className="card_content_wrap text-center">
                      <div className="logo_wrap">
                        <img src={Logo} alt="logo" />
                        <h6>
                          Don’t have an account yet?
                          <Link to={"/"} className="signUpSpan">
                            Sign Up
                          </Link>
                        </h6>
                      </div>
                      <form onSubmit={handleSubmit} autoComplete="">
                        <div className="form_wrapper">
                          <div className="mb-4">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label label_modify"
                            >
                              <span className="mendatary">*</span> Email
                            </label>
                            <input
                              autoComplete=""
                              type="email"
                              id="email"
                              name="email"
                              placeholder="demo@demo.com"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="form-control input_modify"
                              style={
                                errors.email && touched.email
                                  ? { borderColor: "red" }
                                  : {}
                              }
                            />
                            {errors.email && touched.email && (
                              <p classNameName="error" style={{ color: "red" }}>
                                {errors.email}
                              </p>
                            )}
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="exampleFormControlInput2"
                              className="form-label label_modify"
                            >
                              <span className="mendatary">*</span> Password
                            </label>
                            <input
                              autoComplete=""
                              type="password"
                              id="password"
                              className="form-control input_modify"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              style={
                                errors.password && touched.password
                                  ? { borderColor: "red" }
                                  : {}
                              }
                            />
                            {errors.password && touched.password && (
                              <p className="error" style={{ color: "red" }}>
                                {errors.password}
                              </p>
                            )}
                          </div>
                          <div className="mb-0 auth_btn">
                            <button
                              disabled={isSubmitting}
                              type="submit"
                              className="theme-btn-primary theme-btn"
                            >
                              Sign In
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

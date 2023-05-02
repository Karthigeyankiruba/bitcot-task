import React from "react";
import Logo from "../../assets/images/thumbnails/Logo.svg";
import { useFormik } from "formik";
import { signupSchema } from "../../schemas";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupUser } from "../../redux/signup/signupUser";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    dispatch(signupUser(values));
    localStorage.setItem("userData", JSON.stringify(values));
    navigate("/login");
    const savedSignupData = JSON.parse(localStorage.getItem("userData"));
    console.log(savedSignupData);
    actions.resetForm();
  };

  const {
    values,
    errors,
    handleChange,
    touched,
    isSubmitting,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit,
  });

  return (
    <div className="wrapper">
      <div className="page-wrapper auth_wrapper">
        <div className="content-area-wrapper">
          <div className="content-wrapper">
            <div className="container">
              <div className="card products_blc">
                <div className="card-body">
                  <div className="card_content_wrap text-center"></div>
                  <div className="card_content_wrap text-center">
                    <div className="logo_wrap">
                      <img src={Logo} alt="logo" />
                      <h6>Create an account</h6>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form_wrapper">
                        <div className="mb-4">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label label_modify"
                          >
                            <span className="mendatary">*</span> Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            id="email"
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
                            <p className="error" style={{ color: "red" }}>
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div className="mb-4">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label label_modify"
                          >
                            <span className="mendatary">*</span> Password
                          </label>
                          <input
                            type="password"
                            placeholder="*****"
                            name="password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control input_modify"
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
                        <div className="mb-4">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label label_modify"
                          >
                            <span className="mendatary">*</span>Confirm Password
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Re-Enter your Password"
                            id="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control input_modify"
                            style={
                              errors.confirmPassword && touched.confirmPassword
                                ? { borderColor: "red" }
                                : {}
                            }
                          />
                          {errors.confirmPassword &&
                            touched.confirmPassword && (
                              <p className="error" style={{ color: "red" }}>
                                {errors.confirmPassword}
                              </p>
                            )}
                        </div>
                        <div className="mb-0 auth_btn">
                          <button
                            disabled={isSubmitting}
                            type="submit"
                            className="theme-btn-primary theme-btn"
                          >
                            Sign Up
                          </button>
                        </div>
                        <div className="already">
                          <Link to={"/login"}>Already have Account</Link>
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
  );
};

export default Signup;

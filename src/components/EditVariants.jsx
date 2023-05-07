import React from "react";
import { productVariationSchema } from "../schemas";
import { useFormik } from "formik";

const EditVariants = ({ onSubmit }) => {
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        variant1: "",
        variantPrice1: "",
        variantStock1: "",
        variant2: "",
        variantPrice2: "",
        variantStock2: "",
      },
      validationSchema: productVariationSchema,
      onSubmit,
    });

  return (
    <form
      onSubmit={handleSubmit}
      className="tab-pane fade"
      id="pills-variation"
      role="tabpanel"
      aria-labelledby="pills-variation-tab"
    >
      <div className="card nav_pills_card">
        <div className="card-body">
          <div>
            <div className="form-title">Variants</div>
            <p>
              Add A Custome Variat Options For Your Product, Like Different
              Sizes Or Colors.
            </p>
            <div className="">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label for=" productName">
                      <span className="text-danger">*</span> Variant
                    </label>
                    <input
                      type="text"
                      name="variant1"
                      id="variant1"
                      value={values.variant1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control"
                      style={
                        errors.variant1 && touched.variant1
                          ? { borderColor: "red" }
                          : {}
                      }
                    />
                    {errors.variant1 && touched.variant1 && (
                      <p className="error" style={{ color: "red" }}>
                        {errors.variant1}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label for=" productName">
                      <span className="text-danger">*</span> Price
                    </label>
                    <input
                      type="text"
                      name="variantPrice1"
                      id="variantPrice1"
                      value={values.variantPrice1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.variantPrice1 && touched.variantPrice1
                          ? "error"
                          : ""
                      }
                      style={
                        errors.variantPrice1 && touched.variantPrice1
                          ? { borderColor: "red" }
                          : {}
                      }
                    />
                    {errors.variantPrice1 && touched.variantPrice1 && (
                      <p className="error" style={{ color: "red" }}>
                        {errors.variantPrice1}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label for=" productName">
                      <span className="text-danger">*</span> Stock keeping unit
                    </label>
                    <input
                      type="text"
                      name="variantStock1"
                      id="variantStock1"
                      value={values.variantStock1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.variantStock1 && touched.variantStock1
                          ? "error"
                          : ""
                      }
                      style={
                        errors.variantStock1 && touched.variantStock1
                          ? { borderColor: "red" }
                          : {}
                      }
                    />
                    {errors.variantStock1 && touched.variantStock1 && (
                      <p className="error" style={{ color: "red" }}>
                        {errors.variantStock1}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group uploader-wrapper">
              <label for="Description">
                <span className="text-danger">*</span> Upload Image
              </label>
              <div className="uploader-wrapper-inner">
                <img
                  src="https://emilus.themenate.net/img/thumbs/thumb-7.jpg"
                  alt="pictures"
                />
                <input type="file" />
              </div>
            </div>

            <div className="isMinus">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label for=" productName">
                      <span className="text-danger">*</span> Variant
                    </label>
                    <input
                      type="text"
                      name="variant2"
                      id="variant2"
                      value={values.variant2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.variant2 && touched.variant2 ? "error" : ""
                      }
                      style={
                        errors.variant2 && touched.variant2
                          ? { borderColor: "red" }
                          : {}
                      }
                    />
                    {errors.variant2 && touched.variant2 && (
                      <p className="error" style={{ color: "red" }}>
                        {errors.variant2}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label for=" productName">
                      <span className="text-danger">*</span> Price
                    </label>
                    <input
                      type="text"
                      name="variantPrice2"
                      id="variantPrice2"
                      value={values.variantPrice2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.variantPrice2 && touched.variantPrice2
                          ? "error"
                          : ""
                      }
                      style={
                        errors.variantPrice2 && touched.variantPrice2
                          ? { borderColor: "red" }
                          : {}
                      }
                    />
                    {errors.variantPrice2 && touched.variantPrice2 && (
                      <p className="error" style={{ color: "red" }}>
                        {errors.variantPrice2}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label for=" productName">
                      <span className="text-danger">*</span> Stock keeping unit
                    </label>
                    <input
                      type="text"
                      name="variantStock2"
                      id="variantStock2"
                      value={values.variantStock2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      classNameName={
                        errors.variantStock2 && touched.variantStock2
                          ? "error"
                          : ""
                      }
                      style={
                        errors.variantStock2 && touched.variantStock2
                          ? { borderColor: "red" }
                          : {}
                      }
                    />
                    {errors.variantStock2 && touched.variantStock2 && (
                      <p classNameName="error" style={{ color: "red" }}>
                        {errors.variantStock2}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <span className="removeSpan">-</span>
            </div>
            <div className="form-group uploader-wrapper">
              <label for="Description">
                <span className="text-danger">*</span> Upload Image
              </label>
              <div className="uploader-wrapper-inner">
                <img
                  src="https://emilus.themenate.net/img/thumbs/thumb-7.jpg"
                  alt="pictures"
                />
                <input type="file" />
              </div>
            </div>

            <button className="uploader-add-btne" type="button">
              Add field
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditVariants;

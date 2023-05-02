import { useFormik } from "formik";
import React from "react";
import { productGeneralSchema } from "../schemas";
import { useNavigate } from "react-router-dom";

import sampleData from "../data";

const EditGeneral = () => {
  let navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log(values);
    const newProduct = {
      id: sampleData.length + 1,
      name: values.variant1,
      price: values.variantPrice1,
      stock: values.variantStock1,
    };
    sampleData.push(newProduct);
    actions.resetform();
    // history.push("/products");
    console.log(sampleData);
    navigate("/");
  };

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      productName: "",
      description: "",
      price: "",
      comparePrice: "",
      costperItem: "",
      taxRate: "",
      category: "",
      status: "",
    },
    validationSchema: productGeneralSchema,
    onSubmit,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="tab-pane fade show active"
      id="pills-general"
      role="tabpanel"
      aria-labelledby="pills-general-tab"
    >
      <div className="card nav_pills_card">
        <div className="card-body">
          <div>
            <div className="form-title">Basic Info</div>
            <div className="form-group">
              <label for="productName">
                <span className="text-danger">*</span> Product Name
              </label>
              <input
                type="text"
                name="productName"
                id="productName"
                value={values.productName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                style={
                  errors.productName && touched.productName
                    ? { borderColor: "red" }
                    : {}
                }
              />
              {errors.productName && touched.productName && (
                <p className="error" style={{ color: "red" }}>
                  {errors.productName}
                </p>
              )}
            </div>
            <div className="form-group">
              <label for="Description">
                <span className="text-danger">*</span> Description
              </label>
              <textarea
                type="text"
                id="description"
                className="form-control"
                name="description"
                rows="3"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                // className={
                //   errors.description && touched.description ? "error" : ""
                // }
                style={
                  errors.description && touched.description
                    ? { borderColor: "red" }
                    : {}
                }
              ></textarea>
              {errors.description && touched.description && (
                <p className="error" style={{ color: "red" }}>
                  {errors.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="card nav_pills_card">
        <div className="card-body">
          <div>
            <div className="form-title">Pricing</div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="price">
                    <span className="text-danger">*</span> Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    style={
                      errors.price && touched.price
                        ? { borderColor: "red" }
                        : {}
                    }
                  />
                  {errors.price && touched.price && (
                    <p className="error" style={{ color: "red" }}>
                      {errors.price}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="comparePrice">
                    <span className="text-danger">*</span> Compare price
                  </label>
                  <input
                    type="text"
                    name="comparePrice"
                    id="comparePrice"
                    value={values.comparePrice}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    style={
                      errors.comparePrice && touched.comparePrice
                        ? { borderColor: "red" }
                        : {}
                    }
                  />
                  {errors.comparePrice && touched.comparePrice && (
                    <p className="error" style={{ color: "red" }}>
                      {errors.comparePrice}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for=" costPerItem">
                    <span className="text-danger">*</span> Cost per item
                  </label>
                  <input
                    type="text"
                    name="costperItem"
                    id="costperItem"
                    value={values.costperItem}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    style={
                      errors.costperItem && touched.costperItem
                        ? { borderColor: "red" }
                        : {}
                    }
                  />
                  {errors.costperItem && touched.costperItem && (
                    <p className="error" style={{ color: "red" }}>
                      {errors.costperItem}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="taxRate">
                    <span className="text-danger">*</span> Tax rate
                  </label>
                  <input
                    type="text"
                    name="taxRate"
                    id="taxRate"
                    value={values.taxRate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    style={
                      errors.taxRate && touched.taxRate
                        ? { borderColor: "red" }
                        : {}
                    }
                  />
                  {errors.taxRate && touched.taxRate && (
                    <p className="error" style={{ color: "red" }}>
                      {errors.taxRate}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card nav_pills_card">
        <div className="card-body">
          <div>
            <div className="form-title">Organization</div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="productName">
                    <span className="text-danger">*</span> Category
                  </label>
                  <select
                    name="category"
                    className="form-control"
                    id="category"
                    value={values.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={
                      errors.category && touched.category
                        ? { borderColor: "red" }
                        : {}
                    }
                  >
                    <option value="">Select</option>
                    <option value="clothe">Clothe</option>
                    <option value="bags">Bags</option>
                    <option value="shoes">Shoes</option>
                    <option value="watches">Watches</option>
                    <option value="devices">Devices</option>
                  </select>
                  {errors.category && touched.category && (
                    <p className="error" style={{ color: "red" }}>
                      {errors.category}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="Description">
                    <span className="text-danger">*</span> Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="form-control"
                    value={values.status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={
                      errors.status && touched.status
                        ? { borderColor: "red" }
                        : {}
                    }
                  >
                    <option value="">Select</option>
                    <option value="in_stock">In stock</option>
                    <option value="limited_stock">Limited stock</option>
                    <option value="out_of_stock">Out of stock</option>
                  </select>
                  {errors.status && touched.status && (
                    <p className="error" style={{ color: "red" }}>
                      {errors.status}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditGeneral;

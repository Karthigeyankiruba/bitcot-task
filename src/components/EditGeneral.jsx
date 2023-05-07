import { useFormik } from "formik";
import { productGeneralSchema } from "../schemas";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../actions/userAction";
import { getProducts } from "../reducers/userReducer";

const EditGeneral = ({ onSubmit }) => {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    setValues,
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
  // console.log(onSubmit);
  return (
    <>
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
                {/* <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  Save
                </button> */}
              </div>
            </div>
          </div>
        </div>
        {/* </form>
      <form
        onSubmit={handleSubmit}
        className="tab-pane fade"
        id="pills-variation"
        role="tabpanel"
        aria-labelledby="pills-variation-tab"
      > */}
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
                        <span className="text-danger">*</span> Stock keeping
                        unit
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
                        <span className="text-danger">*</span> Stock keeping
                        unit
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
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default EditGeneral;

{
  /* <form
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
                        className="form-control"
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
                        <span className="text-danger">*</span> Stock keeping
                        unit
                      </label>
                      <input
                        type="text"
                        name="variantStock1"
                        id="variantStock1"
                        value={values.variantStock1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
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
                        className="form-control"
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
                        className="form-control"
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
                        <span className="text-danger">*</span> Stock keeping
                        unit
                      </label>
                      <input
                        type="text"
                        name="variantStock2"
                        id="variantStock2"
                        value={values.variantStock2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        classNameName="form-control"
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
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary"
        >
          Save
        </button>
      </form> */
}

import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import EditHeading from "../../components/EditHeading";
import EditGeneral from "../../components/EditGeneral";
import EditVariants from "../../components/EditVariants";
import Footer from "../../components/Footer";
import { addProduct } from "../../actions/userAction";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";

const Addproduct = ({ title }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const onSubmit = async (values, actions) => {
    const newProduct = {
      id: products.length + 1,
      name: values.productName,
      description: values.description,
      price: values.price,
      comparePrice: values.comparePrice,
      costperItem: values.costperItem,
      taxRate: values.taxRate,
      category: values.category,
      status: values.status,
      variant1: values.variant1,
      variantPrice1: values.variantPrice1,
      variantStock1: values.variantStock1,
      variant2: values.variant2,
      variantPrice2: values.variantPrice2,
      variantStock2: values.variantPrice2,
    };

    dispatch(addProduct(newProduct));
    navigate("/products");
    console.log(newProduct);
  };

  return (
    <>
      <Topbar />
      <div class="page-wrapper">
        <Sidebar />
        <div class="content-area-wrapper">
          <div class="content-area-wrapper">
            <div class="content-wrapper">
              <EditHeading title={title} onSubmit={onSubmit} />
              <div class="tab-content" id="pills-tabContent">
                <EditGeneral onSubmit={onSubmit} />
                <EditVariants onSubmit={onSubmit} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Addproduct;

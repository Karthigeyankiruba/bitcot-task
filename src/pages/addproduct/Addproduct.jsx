import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import EditHeading from "../../components/EditHeading";
import EditGeneral from "../../components/EditGeneral";
import EditVariants from "../../components/EditVariants";
import Footer from "../../components/Footer";

const Addproduct = () => {
  return (
    <>
      <Topbar />
      <div class="page-wrapper">
        <Sidebar />
        <div class="content-area-wrapper">
          <div class="content-area-wrapper">
            <div class="content-wrapper">
              <EditHeading />
              <div class="tab-content" id="pills-tabContent">
                <EditGeneral />
                <EditVariants />
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

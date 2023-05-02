import React from "react";

const Heading = () => {
  return (
    <div className="heading_wrapper d-flex flex-wrap">
      <h1 className="head_title">Product List</h1>
      <nav aria-label="breadcrumb" className="breadcrumb_wrapper">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">E-Commerce</li>
          <li className="breadcrumb-item active" aria-current="page">
            Product List
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Heading;

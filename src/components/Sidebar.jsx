import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar-wrapper open custom-scrollbar wow fadeInLeft">
      <div className="sidebar-content-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item has-subnav active open" id="listTem">
            <button className="sidebar-link" id="pro_toggle">
              <i className="fa-sharp fa-light fa-chart-simple"></i>
              <span className="item-text">Ecommerce</span>
            </button>
            <ul>
              <li>
                <Link to={"/products"} className="sidebar-link active">
                  Product List
                </Link>
              </li>
              <li>
                <Link to={"/addproduct"} className="sidebar-link ">
                  Add Product
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

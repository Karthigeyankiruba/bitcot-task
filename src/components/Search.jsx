import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../src/assets/images/icons/magnifying-glass.png";
import { useSelector } from "react-redux";

const Search = ({ setResults }) => {
  let navigate = useNavigate();
  const [input, setInput] = useState("");

  const products = useSelector((state) => state.login.products);

  // console.log(products[0]);
  const handleChange = (value) => {
    setInput(value);
    const filteredData = input
      ? products.filter((item) =>
          item.productName.toLowerCase().includes(value.toLowerCase())
        )
      : products;

    setResults(filteredData);
  };
  useEffect(() => {
    setResults(products);
  }, [products]);

  const addProductbtn = (e) => {
    e.preventDefault();
    navigate("/addproduct");
  };

  return (
    <div className="filter_wrapper">
      <div className="filet_left_content">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <img src={SearchIcon} alt="Search" />
            </span>
          </div>
          <input
            type="text"
            className="form-control input_modify"
            placeholder="Search"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <select className="custom-select input_modify" defaultValue="All">
          <option value="All">All</option>
          <option value="Clothe">Clothe</option>
          <option value="Bags">Bags</option>
          <option value="Shoes">Shoes</option>
          <option value="Watches">Watches</option>
          <option value="Devices">Devices</option>
        </select>
      </div>
      <div className="filter_btn_wrapper">
        <button
          onClick={addProductbtn}
          className="btn theme-btn-primary theme-btn"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Search;

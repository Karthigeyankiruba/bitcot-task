import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sampleData from "../data";
import SearchIcon from "../../src/assets/images/icons/magnifying-glass.png";
const Search = ({ setResults }) => {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    // const filteredData = sampleData.filter((item) =>
    //   item.productName.toLowerCase().includes(value.toLowerCase())
    // );
    const filteredData = input
      ? sampleData.filter((item) =>
          item.productName.toLowerCase().includes(value.toLowerCase())
        )
      : sampleData;

    setResults(filteredData);
  };
  useEffect(() => {
    setResults(sampleData);
  }, [setResults]);
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
        <Link to={"/addproduct"} className="btn theme-btn-primary theme-btn">
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default Search;

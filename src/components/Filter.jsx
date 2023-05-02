import React from "react";

const Filter = () => {
  return (
    <div className="filter_wrapper  d-block d-sm-none">
      <div className="filet_left_content">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <img src="images/icons/magnifying-glass.png" alt="search" />
            </span>
          </div>
          <input
            type="text"
            className="form-control input_modify"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;

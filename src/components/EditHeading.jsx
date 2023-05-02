import React from "react";
import { Link } from "react-router-dom";

const EditHeading = ({ title }) => {
  return (
    <>
      <div className="filter_wrapper  d-block d-sm-none">
        <div className="filet_left_content">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAXtJREFUOE+tVEFOwkAU7e8Q1yyNmFhv0Ih7yg1acW89AXADj1BOYN2D9gaUPZjeABZiXLI2DOObZmiGwSKGTjJpZ/6819f/3x+yjHHu+g6r1bpCCA8hV4UzIkr5ej34ypKFidmuSQ80mp1IWFYXey+YiU20kvGNEHU8fMwHkEbL6bD/G2FBdtHsZDmQc7/s61K1zViCY/PP2SgwCXMypcg749xbZEmupmw4rl//ZiwFMF3ORj39HKmvzaHo+lA+dFAZhpSqOmSHhxSZMaQlhrqVro5Urp5AJnNx9ADOJyF6y/dXr6gmNgWq1v6YDtOjmXDw8vbeQ5XHEFEUUSqrlExaoprfrLQAlVpDM20Lpm0fadoxsj7ZM+22giiEtMYVzBv80U5vOOfCFo+wRbzTAfpCa/TYIko2qtFt2ehCyEYPoWiA90wQPZuEO7eGJM6vIMZ6ALgAtOQeQBOQZ5zzaKu6cXMXmoR7ZP8xrkl4EllePKUQr8HJZAWhbTs/jATsJjmQpCoAAAAASUVORK5CYII="
                  alt="search"
                />
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
      <div className="card nav_pills_card nav_pills_card_new">
        <div className="card-body">
          <div className="heading_wrapper heading_right_content">
            <h1 className="head_title">{title}</h1>
            <div className="btn_wrapper">
              <Link
                to={"/products"}
                className="theme-btn btn-outline-secondary"
              >
                Discard
              </Link>
              <button type="submit" className="theme-btn theme-btn-primary">
                Save
              </button>
            </div>
          </div>
          <ul
            className="nav nav-pills mb-0 nav_pills_wrapper"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-general-tab"
                data-toggle="pill"
                data-target="#pills-general"
                type="button"
                role="tab"
                aria-controls="pills-general"
                aria-selected="true"
              >
                General
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link "
                id="pills-variation-tab"
                data-toggle="pill"
                data-target="#pills-variation"
                type="button"
                role="tab"
                aria-controls="pills-variation"
                aria-selected="false"
              >
                Variation
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default EditHeading;

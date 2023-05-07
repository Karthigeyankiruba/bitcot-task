import React from "react";
import { Link } from "react-router-dom";

const Table = ({ results, deleteRow }) => {
  return (
    <>
      {results && results.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>No Records Found</h1>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <label class="checkbox_container text-uppercase"> ID</label>
              </th>
              <th scope="col" class="th_didivder">
                Products
                <span class="filter-order-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="13"
                    viewBox="0 0 11 13"
                  >
                    <g
                      id="Group_22146"
                      data-name="Group 22146"
                      transform="translate(-501 -126.5)"
                    >
                      <path
                        id="Icon_ionic-md-arrow-dropdown"
                        data-name="Icon ionic-md-arrow-dropdown"
                        d="M9,13.5,14.5,19,20,13.5Z"
                        transform="translate(492 120.5)"
                        fill="rgba(69,85,96,0.2)"
                      ></path>
                      <path
                        id="Icon_ionic-md-arrow-dropdown-2"
                        data-name="Icon ionic-md-arrow-dropdown"
                        d="M9,19l5.5-5.5L20,19Z"
                        transform="translate(492 113)"
                        fill="rgba(69,85,96,0.2)"
                      ></path>
                    </g>
                  </svg>
                </span>
              </th>
              <th scope="col" class="th_didivder">
                Category
                <span class="filter-order-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="13"
                    viewBox="0 0 11 13"
                  >
                    <g
                      id="Group_22146"
                      data-name="Group 22146"
                      transform="translate(-501 -126.5)"
                    >
                      <path
                        id="Icon_ionic-md-arrow-dropdown"
                        data-name="Icon ionic-md-arrow-dropdown"
                        d="M9,13.5,14.5,19,20,13.5Z"
                        transform="translate(492 120.5)"
                        fill="rgba(69,85,96,0.2)"
                      ></path>
                      <path
                        id="Icon_ionic-md-arrow-dropdown-2"
                        data-name="Icon ionic-md-arrow-dropdown"
                        d="M9,19l5.5-5.5L20,19Z"
                        transform="translate(492 113)"
                        fill="rgba(69,85,96,0.2)"
                      ></path>
                    </g>
                  </svg>
                </span>
              </th>
              <th scope="col" class="th_didivder">
                Price
                <span class="filter-order-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="13"
                    viewBox="0 0 11 13"
                  >
                    <g
                      id="Group_22146"
                      data-name="Group 22146"
                      transform="translate(-501 -126.5)"
                    >
                      <path
                        id="Icon_ionic-md-arrow-dropdown"
                        data-name="Icon ionic-md-arrow-dropdown"
                        d="M9,13.5,14.5,19,20,13.5Z"
                        transform="translate(492 120.5)"
                        fill="rgba(69,85,96,0.2)"
                      ></path>
                      <path
                        id="Icon_ionic-md-arrow-dropdown-2"
                        data-name="Icon ionic-md-arrow-dropdown"
                        d="M9,19l5.5-5.5L20,19Z"
                        transform="translate(492 113)"
                        fill="rgba(69,85,96,0.2)"
                      ></path>
                    </g>
                  </svg>
                </span>
              </th>
              <th scope="col" class="th_didivder">
                Stock
                <span class="filter-order-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="13"
                    viewBox="0 0 11 13"
                  >
                    <g
                      id="Group_22146"
                      data-name="Group 22146"
                      transform="translate(-501 -126.5)"
                    >
                      <path
                        id="Icon_ionic-md-arrow-dropdown"
                        data-name="Icon ionic-md-arrow-dropdown"
                        d="M9,13.5,14.5,19,20,13.5Z"
                        transform="translate(492 120.5)"
                        fill="rgba(69,85,96,0.2)"
                      ></path>
                      <path
                        id="Icon_ionic-md-arrow-dropdown-2"
                        data-name="Icon ionic-md-arrow-dropdown"
                        d="M9,19l5.5-5.5L20,19Z"
                        transform="translate(492 113)"
                        fill="rgba(69,85,96,0.2)"
                      ></path>
                    </g>
                  </svg>
                </span>
              </th>
              <th scope="col" class="th_didivder">
                Status
                <span class="filter-order-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="13"
                    viewBox="0 0 11 13"
                  >
                    <g
                      id="Group_22146"
                      data-name="Group 22146"
                      transform="translate(-501 -126.5)"
                    >
                      <path
                        id="Icon_ionic-md-arrow-dropdown"
                        data-name="Icon ionic-md-arrow-dropdown"
                        d="M9,13.5,14.5,19,20,13.5Z"
                        transform="translate(492 120.5)"
                        fill="rgba(69,85,96,0.2)"
                      ></path>
                      <path
                        id="Icon_ionic-md-arrow-dropdown-2"
                        data-name="Icon ionic-md-arrow-dropdown"
                        d="M9,19l5.5-5.5L20,19Z"
                        transform="translate(492 113)"
                        fill="rgba(69,85,96,0.2)"
                      ></path>
                    </g>
                  </svg>
                </span>
              </th>
              <th scope="col" class="th_didivder">
                Action
                <span class="filter-order-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="13"
                    viewBox="0 0 11 13"
                  >
                    <g
                      id="Group_22146"
                      data-name="Group 22146"
                      transform="translate(-501 -126.5)"
                    >
                      <path
                        id="Icon_ionic-md-arrow-dropdown"
                        data-name="Icon ionic-md-arrow-dropdown"
                        d="M9,13.5,14.5,19,20,13.5Z"
                        transform="translate(492 120.5)"
                        fill="rgba(69,85,96,0.2)"
                      ></path>
                      <path
                        id="Icon_ionic-md-arrow-dropdown-2"
                        data-name="Icon ionic-md-arrow-dropdown"
                        d="M9,19l5.5-5.5L20,19Z"
                        transform="translate(492 113)"
                        fill="rgba(69,85,96,0.2)"
                      ></path>
                    </g>
                  </svg>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((item, id) => {
              return (
                <tr key={id}>
                  <td>
                    <label className="checkbox_container text-uppercase">
                      {id + 1}
                    </label>
                  </td>
                  <td>
                    <div className="media align-items-center">
                      <div className="product_thumb">
                        {item.variation && item.variation.length > 0 && (
                          <img
                            src={item.variation[0].productImage}
                            alt={item.productName}
                          />
                        )}
                      </div>
                      <div className="media-body product_des">
                        <h6 className="product_name">{item.productName}</h6>
                      </div>
                    </div>
                  </td>
                  <td className="text_primary">{item.category}</td>
                  {item.variation && item.variation.length > 0 && (
                    <td>$ {item.variation[0].price}</td>
                  )}
                  {item.variation && item.variation.length > 0 && (
                    <td>$ {item.variation[0].stock}</td>
                  )}

                  {/* <td>{item.variation[0].stock}</td> */}
                  <td>{item.status}</td>
                  <td className="actions">
                    <div className="dropdown dropdown_wrapper ">
                      <button
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                          alt="Donts"
                        />
                      </button>
                      <div className="dropdown-menu dropdown-menu-right  ">
                        <Link
                          className="dropdown-item"
                          to={`/editproduct/${item.id}`}
                        >
                          Edit Product
                        </Link>
                        <button
                          onClick={() => deleteRow(id)}
                          type="button"
                          className="dropdown-item"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;

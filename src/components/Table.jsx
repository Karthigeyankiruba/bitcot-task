import React from "react";
import { Link } from "react-router-dom";

const Table = ({ results }) => {
  return (
    <>
      {results.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>No Records Found</h1>
      ) : (
        <table className="table">
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
                        <img
                          src={item.variation[0].productImage}
                          alt={item.productName}
                        />
                      </div>
                      <div className="media-body product_des">
                        <h6 className="product_name">{item.productName}</h6>
                      </div>
                    </div>
                  </td>
                  <td className="text_primary">{item.category}</td>

                  <td>$ {item.variation[0].price}</td>
                  <td>{item.variation[0].stock}</td>
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
                        <Link className="dropdown-item" to={`/addproduct`}>
                          Edit Product
                        </Link>
                        <button type="button" className="dropdown-item">
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

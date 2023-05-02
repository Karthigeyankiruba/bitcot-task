import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Addproduct from "./pages/addproduct/Addproduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Home />} />
          <Route path="/addproduct" element={<Addproduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// <thead>
//   <tr>
//     <th scope="col">
//       <label className="checkbox_container text-uppercase"> ID</label>
//     </th>
//     <th scope="col" className="th_didivder">
//       Products
//       <span className="filter-order-link">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="11"
//           height="13"
//           viewBox="0 0 11 13"
//         >
//           <g
//             id="Group_22146"
//             data-name="Group 22146"
//             transform="translate(-501 -126.5)"
//           >
//             <path
//               id="Icon_ionic-md-arrow-dropdown"
//               data-name="Icon ionic-md-arrow-dropdown"
//               d="M9,13.5,14.5,19,20,13.5Z"
//               transform="translate(492 120.5)"
//               fill="rgba(69,85,96,0.2)"
//             ></path>
//             <path
//               id="Icon_ionic-md-arrow-dropdown-2"
//               data-name="Icon ionic-md-arrow-dropdown"
//               d="M9,19l5.5-5.5L20,19Z"
//               transform="translate(492 113)"
//               fill="rgba(69,85,96,0.2)"
//             ></path>
//           </g>
//         </svg>
//       </span>
//     </th>
//     <th scope="col" className="th_didivder">
//       Category
//       <span className="filter-order-link">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="11"
//           height="13"
//           viewBox="0 0 11 13"
//         >
//           <g
//             id="Group_22146"
//             data-name="Group 22146"
//             transform="translate(-501 -126.5)"
//           >
//             <path
//               id="Icon_ionic-md-arrow-dropdown"
//               data-name="Icon ionic-md-arrow-dropdown"
//               d="M9,13.5,14.5,19,20,13.5Z"
//               transform="translate(492 120.5)"
//               fill="rgba(69,85,96,0.2)"
//             ></path>
//             <path
//               id="Icon_ionic-md-arrow-dropdown-2"
//               data-name="Icon ionic-md-arrow-dropdown"
//               d="M9,19l5.5-5.5L20,19Z"
//               transform="translate(492 113)"
//               fill="rgba(69,85,96,0.2)"
//             ></path>
//           </g>
//         </svg>
//       </span>
//     </th>
//     <th scope="col" className="th_didivder">
//       Price
//       <span className="filter-order-link">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="11"
//           height="13"
//           viewBox="0 0 11 13"
//         >
//           <g
//             id="Group_22146"
//             data-name="Group 22146"
//             transform="translate(-501 -126.5)"
//           >
//             <path
//               id="Icon_ionic-md-arrow-dropdown"
//               data-name="Icon ionic-md-arrow-dropdown"
//               d="M9,13.5,14.5,19,20,13.5Z"
//               transform="translate(492 120.5)"
//               fill="rgba(69,85,96,0.2)"
//             ></path>
//             <path
//               id="Icon_ionic-md-arrow-dropdown-2"
//               data-name="Icon ionic-md-arrow-dropdown"
//               d="M9,19l5.5-5.5L20,19Z"
//               transform="translate(492 113)"
//               fill="rgba(69,85,96,0.2)"
//             ></path>
//           </g>
//         </svg>
//       </span>
//     </th>
//     <th scope="col" className="th_didivder">
//       Stock
//       <span className="filter-order-link">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="11"
//           height="13"
//           viewBox="0 0 11 13"
//         >
//           <g
//             id="Group_22146"
//             data-name="Group 22146"
//             transform="translate(-501 -126.5)"
//           >
//             <path
//               id="Icon_ionic-md-arrow-dropdown"
//               data-name="Icon ionic-md-arrow-dropdown"
//               d="M9,13.5,14.5,19,20,13.5Z"
//               transform="translate(492 120.5)"
//               fill="rgba(69,85,96,0.2)"
//             ></path>
//             <path
//               id="Icon_ionic-md-arrow-dropdown-2"
//               data-name="Icon ionic-md-arrow-dropdown"
//               d="M9,19l5.5-5.5L20,19Z"
//               transform="translate(492 113)"
//               fill="rgba(69,85,96,0.2)"
//             ></path>
//           </g>
//         </svg>
//       </span>
//     </th>
//     <th scope="col" className="th_didivder">
//       Status
//       <span className="filter-order-link">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="11"
//           height="13"
//           viewBox="0 0 11 13"
//         >
//           <g
//             id="Group_22146"
//             data-name="Group 22146"
//             transform="translate(-501 -126.5)"
//           >
//             <path
//               id="Icon_ionic-md-arrow-dropdown"
//               data-name="Icon ionic-md-arrow-dropdown"
//               d="M9,13.5,14.5,19,20,13.5Z"
//               transform="translate(492 120.5)"
//               fill="rgba(69,85,96,0.2)"
//             ></path>
//             <path
//               id="Icon_ionic-md-arrow-dropdown-2"
//               data-name="Icon ionic-md-arrow-dropdown"
//               d="M9,19l5.5-5.5L20,19Z"
//               transform="translate(492 113)"
//               fill="rgba(69,85,96,0.2)"
//             ></path>
//           </g>
//         </svg>
//       </span>
//     </th>
//     <th scope="col" className="th_didivder">
//       Action
//       <span className="filter-order-link">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="11"
//           height="13"
//           viewBox="0 0 11 13"
//         >
//           <g
//             id="Group_22146"
//             data-name="Group 22146"
//             transform="translate(-501 -126.5)"
//           >
//             <path
//               id="Icon_ionic-md-arrow-dropdown"
//               data-name="Icon ionic-md-arrow-dropdown"
//               d="M9,13.5,14.5,19,20,13.5Z"
//               transform="translate(492 120.5)"
//               fill="rgba(69,85,96,0.2)"
//             ></path>
//             <path
//               id="Icon_ionic-md-arrow-dropdown-2"
//               data-name="Icon ionic-md-arrow-dropdown"
//               d="M9,19l5.5-5.5L20,19Z"
//               transform="translate(492 113)"
//               fill="rgba(69,85,96,0.2)"
//             ></path>
//           </g>
//         </svg>
//       </span>
//     </th>
//   </tr>
// </thead>;

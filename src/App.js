import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Addproduct from "./pages/addproduct/Addproduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditProduct from "./pages/editproduct/EditProduct";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/products" element={<Home />} />
            <Route
              path="/addproduct"
              element={<Addproduct title="Add Product" />}
            />
            <Route
              path="/editproduct/:id"
              element={<EditProduct title="Edit Product" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

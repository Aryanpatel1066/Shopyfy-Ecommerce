import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import ProductList from "../pages/ProductList";
import Home from "./Home";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import ProductDetails from "../pages/ProductDetails";
import Profile from "../pages/Profile";
import AddressDetail from "../pages/AddressDetail";
import UserDetails from "../pages/UserDetails";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
      <Route path="/register" element={<Register />} />
      
      {/* Nested routes for Profile */}
      <Route path="/profile" element={<Profile />}>
        <Route index element={<Navigate to="userDetails" />} /> {/* Default route */}
        <Route path="userDetails" element={<UserDetails />} />
        <Route path="addressDetails" element={<AddressDetail />} />
      </Route>
    </Routes>
  );
}

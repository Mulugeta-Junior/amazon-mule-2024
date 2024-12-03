import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Payment from "./pages/Payment/Payment";
import Order from "./pages/order/Order";
import Cart from "./pages/Cart/Cart";
import Landing from "./pages/Landing/Landing";
import Result from "./pages/Result/Result";
import Productdetail from "./pages/Productdetail/Productdetail";
import Auth from "./pages/Auth/Auth";


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/Order" element={<Order />} />
      <Route path="/category/:categoryName" element={<Result />} />
      <Route path="/products/:productId" element={<Productdetail />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  );
}

export default Routing;

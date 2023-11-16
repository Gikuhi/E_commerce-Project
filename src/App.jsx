import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Checkout from "./components/Checkout.jsx";
import Login_register from "./components/Login_register.jsx";
import Shop from "./components/Shop.jsx";
import Lost_password from "./components/Lost_password.jsx";
import Shopping_cart from "./components/Shopping_cart.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Product_details from "./components/Product_details.jsx";
import Order_tracking from "./components/Order_tracking.jsx";
import My_account from "./components/My_account.jsx";
import Contact_us from "./components/Contact_us.jsx";
import Coming_soon from "./components/Coming_soon.jsx";

function App() {

  return (
    <>
        <Router>
           <Routes>
            <Route path = "/"  element = {<Home/>} />
              <Route path ="/about" element={<About/>} />
              <Route path ="*" element={<Error/>} />
              <Route path ="/checkout" element={<Checkout/>} />
              <Route path ="/login_register" element={<Login_register/>} />
              <Route path ="/shop" element={<Shop/>} />
              <Route path ="/lost_password" element={<Lost_password/>} />
              <Route path ="/shopping_cart" element={<Shopping_cart/>} />
              <Route path ="/wishlist" element={<Wishlist/>} />
              <Route path ="/product_details" element={<Product_details/>} />
              <Route path ="/order_tracking" element={<Order_tracking/>} />
              <Route path ="/my_account" element={<My_account/>} />
              <Route path ="/contact_us" element={<Contact_us/>} />
              <Route path ="/coming_soon" element={<Coming_soon/>} />

        </Routes>
        </Router>

    </>
  )
}

export default App

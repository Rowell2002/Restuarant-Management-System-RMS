import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/home';
import Layout from './Pages/layout';
import Login from './Pages/Login';
import Order from './Pages/Order';
import Payments from './Pages/Payments';
import ProductDetails from './Pages/productDetails';
import Profile from './Pages/Profile';
import Purchases from './Pages/Purchases';
import Register from './Pages/Register';
import Stock from './Pages/Stock';
import ThankYou from './Pages/thankYou';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/order" element={<Order />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="purchase" element={<Purchases />} /> {/* Default view */}
          <Route path="stock" element={<Stock />} />
          <Route path="profile" element={<Profile />} />
          <Route path="payments" element={<Payments />} />
          <Route path="details" element={<ProductDetails />} />
          <Route path="thankyou" element={<ThankYou />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

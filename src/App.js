import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import Iphone from './pages/Iphone'
import TVHome from './pages/TVHome';
import Accessories from './pages/Accessories'
import CompareProduct from './pages/CompareProduct'
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import ShippingPolicy from './pages/ShippingPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermAndConditions from './pages/TermAndConditions';
import RefundPolicy from './pages/RefundPolicy';
import Laptops from './pages/Laptops';
import SingleProduct from './components/SingleProduct';
import HeadPhones from './pages/HeadPhones';
import Tablets from './pages/Tablets';
import Watches from './pages/Watches';
import Faq from './pages/Faq';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<OurStore />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="tv-home" element={<TVHome />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="compare-products" element={<CompareProduct />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="blog/:id" element={<SingleBlog />} />
        <Route path="laptops" element={<Laptops />} />
        <Route path="faq" element={<Faq />} />
        <Route path="headphones" element={<HeadPhones />} />
        <Route path="tablets" element={<Tablets />} />
        <Route path="watches" element={<Watches />} />
        <Route path="shipping-policy" element={<ShippingPolicy />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<TermAndConditions />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;

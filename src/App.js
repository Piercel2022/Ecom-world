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
import Accessories from './pages/Accessories'
import CompareProduct from './pages/CompareProduct'

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
        <Route path="store" element={<OurStore />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="compare-products" element={<CompareProduct />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import ProductDetails from './Pages/ProductDetails';
import Footer from './Components/Footer';
import Cart from './Pages/Cart';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
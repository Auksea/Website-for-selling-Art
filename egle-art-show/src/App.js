import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Header';
import Footer from './components/Footer1';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import Contact from './components/Contact';
import SingleProduct from './components/SingleProduct';
import products from './components/productsData'; // Import the products array

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log('Adding to Cart:', product);
    setCart((prevCart) => [...prevCart, { ...product }]);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={<Store products={products} addToCart={addToCart} cart={cart} setCart={setCart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/product/:id"
            element={<SingleProduct products={products} addToCart={addToCart} cart={cart} setCart={setCart} removeFromCart={removeFromCart} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

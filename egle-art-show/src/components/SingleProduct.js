import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
import Cart from './Cart';
import './Cart.css';

const SingleProduct = ({ products, addToCart, cart, handleCheckout, removeFromCart }) => {
  const { id } = useParams();

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  const product = products.find((product) => product.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const { name, price, description, size } = product;
  const productImage = `/pics/pic${id}.jpg`;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const descriptionLines = description.split('\n');

  return (
    <div>
      <Cart cartItems={cart} handleCheckout={handleCheckout} removeFromCart={removeFromCart} />
      <div className="product-container">
        <div className="product-details">
        <h2>{name}</h2>
        <p>Price: {price}€ <br/> This is only the initial price from which we can negotiate, contact us personally</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
          <p>{size}</p>
          {descriptionLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <p>Acrylic, gesso-textures, mixed. Canvas 100% cotton</p>
        </div>
        <div className="product-image">
          <img src={productImage} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;


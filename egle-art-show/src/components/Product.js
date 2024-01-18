import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
  const { id, name, price } = product;
  const productImage = `/pics/pic${id}.jpg`;

  return (
    <div className="product">
      <Link to={`/product/${id}`} className='link'>
        <div className="image-container">
          <img src={productImage} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>Price: {price}€</p>
      </Link>
    </div>
  );
};

export default Product;
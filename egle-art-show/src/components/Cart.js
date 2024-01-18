import React, { useState } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'; // Import the trash icon

const Cart = ({ cartItems = [], handleCheckout, removeFromCart }) => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="cart-container">
      <div className="cart-icon" onClick={toggleCart}>
        {/* Shopping cart icon */}
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-count">
          {cartItems.length > 0 ? <span className="count">{cartItems.length}</span> : null}
        </span>
      </div>
      {showCart && (
        <div className="cart-details">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <span>{item.name}</span>
                <button className='remove-button' onClick={() => removeFromCart(item)}> {/* Pass the item to removeFromCart */}
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

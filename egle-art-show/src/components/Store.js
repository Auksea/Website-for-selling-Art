import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Product from './Product';
import Cart from './Cart';
import './Cart.css';
import products from './productsData';
import './Store.css';
import StoreCarousel from './StoreCarousel';

const Store = ({ addToCart, cart, handleCheckout, removeFromCart }) => {
  const { t } = useTranslation();

  return (
    <div>
      {/*<Cart cartItems={cart} handleCheckout={handleCheckout} removeFromCart={removeFromCart} />*/}
      <div className="store">
        <h1 className='heading'>{t('store.title')}</h1>
        <div className="store-carousel">
          <StoreCarousel />
        </div>
        <div className="products">
          {products.map((product) => (
            <div key={product.id}>
              <Link key={product.id} to={`/product/${product.id}`} className='link'>
                <Product product={product} addToCart={addToCart} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;


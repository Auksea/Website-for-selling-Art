import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SingleProduct.css';

const SingleProduct = ({ products, addToCart, cart, handleCheckout, removeFromCart }) => {
  const { t } = useTranslation();
  const { id } = useParams();

  if (!products || products.length === 0) {
    return <div>{t('singleProduct.loading')}</div>;
  }

  const product = products.find((product) => product.id === parseInt(id, 10));

  if (!product) {
    return <div>{t('singleProduct.productNotFound')}</div>;
  }

  const { name, price, description, size } = product;
  const productImage = `/pics/pic${id}.jpg`;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const descriptionLines = description.split('\n');

  return (
    <div>
      {/* <Cart cartItems={cart} handleCheckout={handleCheckout} removeFromCart={removeFromCart} /> */}
      <div className="product-container">
        <div className="product-details">
          <h2>{name}</h2>
          <p className='firstParagraph'>
            {t('singleProduct.price')}: {price}€ <br/>
          </p>

          <p className='secondParagraph'>
            ({t('singleProduct.priceNote')})
          </p>

          <p className='firstParagraph'>
            {t('singleProduct.size')}: {size} - {descriptionLines[0]}
          </p>
          
          {/* <button onClick={handleAddToCart}>{t('singleProduct.addToCart')}</button> */}
          {descriptionLines.slice(1).map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <p>{t('singleProduct.material')}</p>
        </div>
        <div className="product-image">
          <img src={productImage} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;




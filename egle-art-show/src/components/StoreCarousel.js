import React from 'react';
import { Carousel } from 'react-bootstrap';
import './StoreCarousel.css';

const StoreCarousel = () => {
  const carouselImages = [
    { id: 1, src: '/pics/art-gallery.jpg', alt: 'Image' },
  ];

  return (
    <Carousel>
      {carouselImages.map(image => (
        <Carousel.Item key={image.id}>
          <img
            className="d-block w-100"
            src={image.src}
            alt={image.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default StoreCarousel;
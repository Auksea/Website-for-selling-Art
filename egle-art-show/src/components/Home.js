import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();


  const paintings = [
    { src: '/pics/pic4.jpg'},
    { src: '/pics/pic5.jpg'},
    { src: '/pics/pic7.jpg'},
    { src: '/pics/pic9.jpg'},
    { src: '/pics/pic10.jpg'},
  ];

  return (
    <div className="home-container">
      <div className="row">
        <div className="text-column animated slideInLeft">
          <p className='homeParagraph'><b>{t('home.abstract_art')}</b> {t('home.abstract_art_description')}</p>
          <hr className='lineHome' />
        </div>
      </div>
      <div className="row">
        <div className="carousel-column">
          <Carousel interval={3000} pause={false}>
            {paintings.slice(0, 5).map((painting, index) => (
              <Carousel.Item key={index}>
                <img
                  className="carousel-img"
                  src={process.env.PUBLIC_URL + painting.src}
                  alt={`Painting ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="text-column">
          <p className='homeParagraph'>{t('home.abstract_art_forms')}</p>
          <p className='homeParagraph'>{t('home.abstraction')}</p>
        </div>
      </div>
      <p className='homeParagraph'>{t('home.abstract_art_theory')}</p>
      <p className='citationHome'>{t('home.art_voice')}</p>
    </div>
  ); 
}

export default Home;




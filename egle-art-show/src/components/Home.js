import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();


  const paintings = [
    { src: '/pics/pic1.jpg'},
    { src: '/pics/pic2.jpg'},
    { src: '/pics/pic3.jpg'},
    { src: '/pics/pic4.jpg'},
    { src: '/pics/pic5.jpg'},
    { src: '/pics/pic6.jpg'},
    { src: '/pics/pic7.jpg'},
    { src: '/pics/pic8.jpg'},
    { src: '/pics/pic9.jpg'},
    { src: '/pics/pic10.jpg'},
    { src: '/pics/pic11.jpg'},
    { src: '/pics/pic12.jpg'},
    { src: '/pics/pic13.jpg'},
    { src: '/pics/pic14.jpg'},
    { src: '/pics/pic15.jpg'},
    { src: '/pics/pic16.jpg'},
    { src: '/pics/pic17.jpg'},
    { src: '/pics/pic18.jpg'},
    { src: '/pics/pic19.jpg'},
    { src: '/pics/pic20.jpg'},
    { src: '/pics/pic21.jpg'},
    { src: '/pics/pic22.jpg'},
    { src: '/pics/pic23.jpg'},
    { src: '/pics/pic24.jpg'},
    { src: '/pics/pic25.jpg'},
    { src: '/pics/pic26.jpg'},
    { src: '/pics/pic27.jpg'},
    { src: '/pics/pic28.jpg'},
    { src: '/pics/pic29.jpg'},
    { src: '/pics/pic30.jpg'},
    { },
    { src: '/pics/pic32.jpg',},
    { src: '/pics/pic33.jpg',},
    { src: '/pics/pic34.jpg',},
    { src: '/pics/pic35.jpg',},
    { src: '/pics/pic36.jpg',},
    { src: '/pics/pic37.jpg',},
  ];

  return (
    <div className="home-container">
      <div className="row">
        <div className="text-column animated slideInLeft">
          <p className='homeParagraph'><b>{t('home.abstract_art')}</b> {t('home.abstract_art_description')}</p>
          <hr className='lineHome'></hr>
        </div>
      </div>
      <div className="row">
      <div className="carousel-column">
      <Carousel interval={3000} pause={false}>
        {paintings.slice(0, 5).map((painting, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + painting.src}
              alt={`Painting ${index + 1}`}
            />
          <Carousel.Caption>
          </Carousel.Caption>
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




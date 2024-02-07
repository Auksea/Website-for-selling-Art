import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();


  const paintings = [
    { src: '/pics/pic1.jpg', descriptionKey: 'paintings.painting1', description: 'ACRYLIC ABSTRACT ART' },
    { src: '/pics/pic2.jpg', descriptionKey: 'paintings.painting2', description: 'It was born at the beginning of the 20th century and was completely radical for its time' },
    { src: '/pics/pic3.jpg', descriptionKey: 'paintings.painting3', description: 'The main purpose of abstraction in art is not to tell a story, but to encourage involvement and imagination' },
    { src: '/pics/pic4.jpg', descriptionKey: 'paintings.painting4', description: 'Abstract artists use a variety of techniques to create their work, mixing traditional means with more experimental idea' },
    { src: '/pics/pic5.jpg', descriptionKey: 'paintings.painting5', description: 'Freedom of form and interpretation' },
    { src: '/pics/pic6.jpg', descriptionKey: 'paintings.painting6', description: '' },
    { src: '/pics/pic7.jpg', descriptionKey: 'paintings.painting7', description: '' },
    { src: '/pics/pic8.jpg', descriptionKey: 'paintings.painting8', description: '' },
    { src: '/pics/pic9.jpg', descriptionKey: 'paintings.painting9', description: '' },
    { src: '/pics/pic10.jpg', description: '' },
    { src: '/pics/pic11.jpg', description: '' },
    { src: '/pics/pic12.jpg', description: '' },
    { src: '/pics/pic13.jpg', description: '' },
    { src: '/pics/pic14.jpg', description: '' },
    { src: '/pics/pic15.jpg', description: '' },
    { src: '/pics/pic16.jpg', description: '' },
    { src: '/pics/pic17.jpg', description: '' },
    { src: '/pics/pic18.jpg', description: '' },
    { src: '/pics/pic19.jpg', description: ''},
    { src: '/pics/pic20.jpg', description: ''},
    { src: '/pics/pic21.jpg', description: ''},
    { src: '/pics/pic22.jpg', description: ''},
    { src: '/pics/pic23.jpg', description: ''},
    { src: '/pics/pic24.jpg', description: ''},
    { src: '/pics/pic25.jpg', description: ''},
    { src: '/pics/pic26.jpg', description: ''},
    { src: '/pics/pic27.jpg', description: ''},
    { src: '/pics/pic28.jpg', description: ''},
    { src: '/pics/pic29.jpg', description: ''},
    { src: '/pics/pic30.jpg', description: ''},
    { },
    { src: '/pics/pic32.jpg', description: ''},
    { src: '/pics/pic33.jpg', description: ''},
    { src: '/pics/pic34.jpg', description: ''},
    { src: '/pics/pic35.jpg', description: ''},
    { src: '/pics/pic36.jpg', description: ''},
    { src: '/pics/pic37.jpg', description: ''},
    // Add more painting objects as needed
    //Change numbers and so on of places
  ];

  return (
    <div>
      <Carousel interval={3000} pause={false}>
        {paintings.slice(0, 5).map((painting, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + painting.src}
              alt={`Painting ${index + 1}`}
            />
            <Carousel.Caption>
              <p>{t(painting.descriptionKey)}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;




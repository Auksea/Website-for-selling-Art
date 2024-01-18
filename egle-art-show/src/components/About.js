import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="background">
      <div class="blurry-bg"></div>
      <div className="text-container">
        <h1>About the author</h1>
        <p>My name is Egle. I am a very sensitive, sweet woman.</p>
        <p>I have always loved art. I was lucky enough to live in Italy, a country full of art, but I had no idea that I could create anything. I always imagined myself to be very logical, rational. Really "not for art".</p>
        <p>And this is quite unexpected. In 2022, due to the unbearable pain after the loss of a loved one, looking for a way out of depression / the path led to an art therapy class.</p>
        <p>When my house became full of paintings. The desire came to share my work with the whole world.</p>
        <p className="citation">
          "Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen." (Leonardo da Vinci)
        </p>
      </div>
    </div>
  );
};

export default About;

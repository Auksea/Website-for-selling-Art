import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="about-container">
      <h1 className="AboutHeading">{t('about.title')}</h1>
      <div className="AboutColumns-container">
        <div className="AboutText-column">
          <div className="AboutText-container">
            <p>{t('about.intro')}</p>
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
            <p>{t('about.paragraph3')}</p>
          </div>
        </div>
        <div className="AboutImage-column">
          <div className="AboutImage-container">
            <img src="/pics/pic12.webp" alt="Artwork" />
          </div>
        </div>
      </div>
      <p className="citation">
        "{t('about.citation')}" ({t('about.citationAuthor')})
      </p>
    </div>
  );
};

export default About;





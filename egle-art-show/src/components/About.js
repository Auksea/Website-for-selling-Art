import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="background">
      <div class="blurry-bg"></div>
      <div className="text-container">
        <h1>{t('about.title')}</h1>
        <p>{t('about.intro')}</p>
        <p>{t('about.paragraph1')}</p>
        <p>{t('about.paragraph2')}</p>
        <p>{t('about.paragraph3')}</p>
        <p className="citation">
          "{t('about.citation')}" ({t('about.citationAuthor')})
        </p>
      </div>
    </div>
  );
};

export default About;


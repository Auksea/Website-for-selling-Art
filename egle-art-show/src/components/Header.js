import React, { useState } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [showCurtainMenu, setShowCurtainMenu] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const renderHeading = () => {
    switch (location.pathname) {
      case '/':
        return t('Home');
      case '/store':
        return t('Store');
      case '/about':
        return t('About Author');
      case '/contact':
        return t('Contacts');
      default:
        return '';
    }
  };

  return (
    <div className="header-wrapper">
      <div className="header-heading">{renderHeading()}</div>
      {showCurtainMenu && (
        <div className="curtain-menu-header">
          <button className="close-btn" onClick={() => setShowCurtainMenu(false)}>&times;</button>
          <Link to="/" className="curtain-nav-link" onClick={() => setShowCurtainMenu(false)}>{t('navbar.home')}</Link>
          <Link to="/store" className="curtain-nav-link" onClick={() => setShowCurtainMenu(false)}>{t('navbar.store')}</Link>
          <Link to="/about" className="curtain-nav-link" onClick={() => setShowCurtainMenu(false)}>{t('navbar.about')}</Link>
          <Link to="/contact" className="curtain-nav-link" onClick={() => setShowCurtainMenu(false)}>{t('navbar.contact')}</Link>
          
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              {t('dropdown.language')}
            </Dropdown.Toggle>
  
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => { changeLanguage('en'); setShowCurtainMenu(false); }}>
                <span className="fi fi-gb"></span> {t('dropdown.english')}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => { changeLanguage('fr'); setShowCurtainMenu(false); }}>
                <span className="fi fi-fr"></span> {t('dropdown.french')}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => { changeLanguage('lt'); setShowCurtainMenu(false); }}>
                <span className="fi fi-lt fis"></span> {t('dropdown.lithuanian')}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )}
      <Container>
        {!showCurtainMenu && (
          <Navbar expand="sm" variant="light" className="custom-navbar">
            <Navbar.Toggle onClick={() => setShowCurtainMenu(!showCurtainMenu)} />
            <Navbar.Collapse className="justify-content-between">
              <Nav className="mr-auto">
                <Link to="/" className="nav-link" onClick={() => setShowCurtainMenu(false)}>{t('navbar.home')}</Link>
                <Link to="/store" className="nav-link" onClick={() => setShowCurtainMenu(false)}>{t('navbar.store')}</Link>
                <Link to="/about" className="nav-link" onClick={() => setShowCurtainMenu(false)}>{t('navbar.about')}</Link>
                <Link to="/contact" className="nav-link" onClick={() => setShowCurtainMenu(false)}>{t('navbar.contact')}</Link>
              </Nav>
              <Nav>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    {t('dropdown.language')}
                  </Dropdown.Toggle>
  
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => { changeLanguage('en'); setShowCurtainMenu(false); }}>
                      <span className="fi fi-gb"></span> {t('dropdown.english')}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => { changeLanguage('fr'); setShowCurtainMenu(false); }}>
                      <span className="fi fi-fr"></span> {t('dropdown.french')}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => { changeLanguage('lt'); setShowCurtainMenu(false); }}>
                      <span className="fi fi-lt fis"></span> {t('dropdown.lithuanian')}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )}
      </Container>
    </div>
  );  
};

export default Header;










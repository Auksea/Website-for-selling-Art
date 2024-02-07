import React from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const Header = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav>
            <Link to="/" className="nav-link">{t('navbar.home')}</Link>
            <Link to="/store" className="nav-link">{t('navbar.store')}</Link>
            <Link to="/about" className="nav-link">{t('navbar.about')}</Link>
            <Link to="/contact" className="nav-link">{t('navbar.contact')}</Link>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              {t('dropdown.language')}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeLanguage('en')}>
                <span className="fi fi-gb"></span> {t('dropdown.english')}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage('fr')}>
                <span className="fi fi-fr"></span> {t('dropdown.french')}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage('lt')}>
                <span className="fi fi-lt fis"></span> {t('dropdown.lithuanian')}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;







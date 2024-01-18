import React from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/store" className="nav-link">Store</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Language
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <span className="fi fi-gb"></span> English
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <span className="fi fi-fr"></span> French
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <span className="fi fi-lt fis"></span> Lithuanian
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;





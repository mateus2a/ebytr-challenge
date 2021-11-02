import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBarContent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-5">
      <Container>
        <Navbar.Brand href="#home">Ebytr</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link><Link to="/add">New Task</Link></Nav.Link>
            <Nav.Link><Link to="/all">Tasks</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarContent;
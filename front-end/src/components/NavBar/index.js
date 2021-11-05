import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBarContent = () => {
  return (
    <Navbar data-testid="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-5">
      <Container data-testid="container">
        <Navbar.Brand data-testid="navbar-brand" href="#home">Ebytr</Navbar.Brand>
        <Navbar.Toggle data-testid="navbar-toggle" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse data-testid="navbar-collapse" id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link><Link data-testid="link-new" to="/add">New Task</Link></Nav.Link>
            <Nav.Link><Link data-testid="link-all" to="/all">Tasks</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarContent;
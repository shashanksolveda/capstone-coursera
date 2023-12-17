import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';

function NavbarHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary justify-content-between align-items-center">
        <Container className="justify-content-between align-items-center">
            <Navbar.Brand href="/">
                <img className='navbar-logo' src={logo} alt='logo-img'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navvbar-nav"/>
            <Navbar.Collapse id="responsive-navvbar-nav">
                <Nav className="ml-auto ms-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Menu</Nav.Link>
                    <Nav.Link href='/booking'>Reservations</Nav.Link>
                    <Nav.Link>Order online</Nav.Link>
                    <Nav.Link>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavbarHeader
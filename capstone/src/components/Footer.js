import React from 'react'
import Container from 'react-bootstrap/Container';
import {Col, Row} from 'react-bootstrap';
import footerLogo from '../images/footerLogo.png';

function Footer() {
  return (
    <footer className='bg-dark text-light'>
        <Container fluid className='d-flex align-items-center justify-content-center w-100'>
            <Row className='m-3 w-50'>
                
                <Col >
                    <img className='footer-logo' src={footerLogo} alt='logo-img'/>
                </Col>

                <Col >
                    <h5>Links</h5>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/booking">Reservations</a></li>
                        <li><a href="/">Order online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </Col>

                <Col>
                    <h5>Contact Info</h5>
                    <p>123 Main Street, City</p>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </Col>

                <Col >
                    <h5>Social Media</h5>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">Instagram</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
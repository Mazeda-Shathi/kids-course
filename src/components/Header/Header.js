import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink,Link} from 'react-router-dom';
const Header = () => {
    return (
        
  <Navbar bg="primary" variant="dark" className="fixed-top">
    <Container>
    <Nav className="mx-auto">
     <h3> <Link  className='text-light text-decoration-none me-3' to="/home">Home</Link></h3>
     <h3> <Link  className='text-light text-decoration-none me-3' to="/service">Services</Link></h3>
     <h3> <Link  className='text-light text-decoration-none me-3' to="/instructor">Instructor</Link></h3>
     <h3> <Link  className='text-light text-decoration-none' to="/about">About us</Link></h3>
    </Nav>
    </Container>
  </Navbar>
      


    );
};

export default Header;
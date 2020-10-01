import React from 'react';
import { Button, Form, FormControl, Nav, Navbar,  } from 'react-bootstrap';
import logo from '../../images/Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
    return (
         <Navbar bg="" expand="lg" className="navbar-container">
            <Navbar.Brand href="#home">
                <img 
                        src={logo} 
                        width="150" 
                        height="50"
                        className="d-inline-block- align-top logo-img" 
                        alt="Logo" />
            </Navbar.Brand>
                <FormControl type="text" placeholder="Search" className="form-control" />
            <Nav className="mr-auto nav-link">
                <Nav.Link href="#home">News</Nav.Link>
                <Nav.Link href="#features">Destination</Nav.Link>
                <Nav.Link href="#pricing">Blog</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link> 
            </Nav>
            <Button variant="warning" className="navbar-btn">Search</Button>
        </Navbar> 
    );
};

export default Home;
import React, { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // optional custom CSS for hover

const NavigationBar = () => {
	const role = localStorage.getItem('role')
	const handleLogOut = () => {
		localStorage.removeItem('role');
	}
	useEffect(()=>{
		if(!role){
			window.location.href = '/'
		}
	},[role])
    return (
        <Navbar expand="lg" bg="primary" variant="dark" className="shadow-sm py-3" sticky="top">
            <Container>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        {role==="admin" && (
							<><Nav.Link as={Link} to="/" className="nav-item-custom">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-item-custom">About</Nav.Link></>)}
                        <Nav.Link as={Link} to="/contact" className="nav-item-custom">Contact</Nav.Link>
						<Nav.Link as={Link} to="/login" className="nav-item-custom" onClick={handleLogOut}>LogOut</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;

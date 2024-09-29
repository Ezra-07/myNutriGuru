import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';
import './MyNavbar.css'; 
import { useUser } from './UserContext';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    const { user } = useUser();
    const userName = user.name;
    const userImage = `${user.picture}`;

    return (
        <Navbar className="custom-navbar" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Image
                        src={"./src/assets/logo2.png"}
                        height="250rem"
                        className="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/dashboard">Home</Nav.Link>
                        <Nav.Link as={Link} to="/meal-log">Nutrition Tracker</Nav.Link>
                    </Nav>
                    <Nav className='user'>
                        <Image
                            src={userImage}
                            roundedCircle
                            width="40"
                            height="40"
                            className="me-2"
                        />
                        <NavDropdown title={userName} id="basic-nav-dropdown" className="custom-dropdown">
                            <NavDropdown.Item href="#action/3.1">User Info</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">SignOut</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;

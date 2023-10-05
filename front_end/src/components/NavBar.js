import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer }  from 'react-router-bootstrap';


export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Pat's Recipes</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Recipes</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/add">
                        <Nav.Link>Add A Recipe</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;
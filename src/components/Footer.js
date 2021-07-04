import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand> Balsem Music </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/favoritefood">Favorite Foods</Nav.Link>

                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Footer

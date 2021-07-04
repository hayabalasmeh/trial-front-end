import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Balsem  </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link to="/">Home</Nav.Link>
                            <Nav.Link to="/favoritefood">Favorite Food</Nav.Link>

                        </Nav>
                    </Container>
                </Navbar>

            </div>
        )
    }
}

export default Header

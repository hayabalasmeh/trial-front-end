import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">

                    <Navbar.Brand>Balsem  </Navbar.Brand>

                    <Link to="/">Home</Link>
                    <Link to="/favoritefood">Favorite Food</Link>



                </Navbar>

            </div>
        )
    }
}

export default Header

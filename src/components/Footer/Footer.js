import React from 'react';
import './Footer.css';
import {Navbar, Nav, NavItem, NavbarBrand} from 'reactstrap';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () =>
    <div className = "footerContainer">
        <Navbar color="light" className="footer">
            <NavbarBrand href='/home' className="navbarBrand">
                <h4 className="nav-title">SONGWRITER</h4>
            </NavbarBrand>

            <Nav>
                <NavItem className="copyright">
                    <p>&copy; Stav Kidron</p>
                </NavItem>
            </Nav>

        </Navbar>
    </div>

export default (Footer);

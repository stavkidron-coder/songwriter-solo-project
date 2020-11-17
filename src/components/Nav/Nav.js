import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavBar = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <Navbar color="light" className="nav">
      <NavbarBrand href="/home" className="navbarBrand">
        <h2 className="nav-title">SONGWRITER</h2>
      </NavbarBrand>
      
      <Nav className="nav-right">
        <NavItem>
          <NavLink className="nav-link" href={loginLinkData.path}>
            {/* Show this link if they are logged in or not,
            but call this link 'Home' if they are logged in,
            and call this link 'Login / Register' if they are not */}
            {loginLinkData.text}
          </NavLink>
        </NavItem>
        
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
          <NavItem>
            <NavLink className="nav-link" href="/info">
                Info Page
            </NavLink>
              <LogOutButton className="nav-link" />
          </NavItem>   
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default connect(mapStoreToProps)(NavBar);

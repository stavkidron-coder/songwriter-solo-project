import React, { useState } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NavBar = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/home';
    loginLinkData.text = 'Home';
  }

  return (
    <Navbar color="light" className="nav">
      <NavbarBrand href="/home" className="navbarBrand">
        <img src={Logo} className="logo" alt="logo"/>
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
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            
            <DropdownToggle caret>
              My Songs
            </DropdownToggle>

            <DropdownMenu>

              <DropdownItem>
                <Link className="nav-link" to="/in-the-works">
                  In-The-Works
                </Link>
              </DropdownItem>

              <DropdownItem>
                <Link className="nav-link" to="/completed">
                Completed
              </Link>
              </DropdownItem>

              <DropdownItem divider/>

              <DropdownItem>
                <Link className="nav-link" to="/edit-song">
                New Song
              </Link>
              </DropdownItem>

            </DropdownMenu>
          </Dropdown>

          

          <NavItem>
            <LogOutButton className="nav-link" />
          </NavItem>

          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default connect(mapStoreToProps)(NavBar);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Logo from '../../Images/logo.png';
import DropDown from './DropDown/DropDown';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Dropdown } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'

const homeIcon = <FontAwesomeIcon icon={faHome}/>




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
            {loginLinkData.text} {homeIcon}
          </NavLink>
        </NavItem>
        
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropDown/> {/* dropdown items in DropDown component */}
            </Dropdown>

            <NavItem>
              <LogOutButton className="nav-link"/>
            </NavItem>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default withRouter(connect(mapStoreToProps)(NavBar));

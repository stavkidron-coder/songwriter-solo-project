import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Logo from '../../Images/logo.png';
// import DropDown from './DropDown/DropDown';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

const NavBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen); 

  // const [dropdownOpen, setOpen] = useState(false);

  let loginLinkData = {
    path: '/login',
    text: 'Login/Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/home';
    loginLinkData.text = 'Home';
  }

  return (
    <>
    <div className="navBar">
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to={loginLinkData.path}>
            <img src={Logo} className="logo" alt="logo"/>
          </Link>  
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className="link" to={loginLinkData.path}>
                  {loginLinkData.text}
                </Link>
              </NavLink>
            </NavItem>
          
          {/* Show the link to the info page and the logout button if the user is logged in */}
          {props.store.user.id && (
            <>
            <NavItem>
              <NavLink className="nav-link">
                <Link className="link" to="/in-the-works">
                  In Progress
                </Link>
              </NavLink>
            </NavItem>
                  
            <NavItem>
              <NavLink className="nav-link">
                <Link className="link" to="/completed">
                  Completed
                </Link>
              </NavLink>
            </NavItem>
            </>
          )}
        

        {props.store.user.id && (
        <Nav className="ml-auto">
          <NavItem>
            <LogOutButton className="nav-link link"/>
          </NavItem>
        </Nav>
        )}
        </Nav>
        </Collapse>
      </Navbar>
    </div>
</>
  );
};

export default connect(mapStoreToProps)(NavBar);

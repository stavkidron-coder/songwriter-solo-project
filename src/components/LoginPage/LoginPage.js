import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import {Jumbotron} from 'reactstrap';

class LoginPage extends Component {
  render() {
    return (
      <Jumbotron className="loginJumbotron">

        <LoginForm />

      </Jumbotron>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);

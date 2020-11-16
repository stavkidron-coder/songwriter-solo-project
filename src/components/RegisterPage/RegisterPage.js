import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Container, Jumbotron} from 'reactstrap';
import './RegisterPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <Jumbotron className="registerJumbotron">
        <Container>
          <RegisterForm />

        </Container>
      </Jumbotron>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);

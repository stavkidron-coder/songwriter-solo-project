import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Container, Button, Jumbotron} from 'reactstrap';

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

          <center>
            <Button
              color="link"
              onClick={() => {
                this.props.history.push('/login');
              }}
            >
              Login
            </Button>
          </center>

        </Container>
      </Jumbotron>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);

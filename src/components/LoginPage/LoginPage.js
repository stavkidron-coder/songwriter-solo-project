import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Button, Container, Form, FormGroup, Label, Input} from 'reactstrap';
import '../LoginPage/LoginPage.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
      this.props.history.push('/landing-page');
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <div className="pageContainer loginPage">
        <Container>
          <Form className="formPanel">
            <FormGroup>
              <h2>Login</h2>
              {this.props.store.errors.loginMessage && (
                <h3 className="alert" role="alert">
                  {this.props.store.errors.loginMessage}
                </h3>
              )}
              <div>
                <Label htmlFor="username">
                  Username:
                  <Input
                    type="text"
                    name="username"
                    required
                    value={this.state.username}
                    onChange={this.handleInputChangeFor('username')}
                  />
                </Label>
              </div>
              <div>
                <Label htmlFor="password">
                  Password:
                  <Input
                    type="password"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.handleInputChangeFor('password')}
                  />
                </Label>
              </div>
              
              <div>
                <Button
                className="btn-purple-dark"
                  onClick={this.login}
                >
                  Login
                </Button>
              </div>
            </FormGroup>
            <center>
              <h5>New user?</h5>
              <Button
                className="registerBtn"
                size="small"
                color="link"
                onClick={() => {
                  this.props.history.push('/registration');
                }}
              >
                Register
              </Button>
            </center>

          </Form>
        </Container>
     </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(LoginPage));

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../RegisterPage/RegisterPage.css';
//Bootstrap
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    admin: false
  };



  registerUser = (event) => {
    event.preventDefault();
    // conditional requiring all inputs to be filled in
    if(this.state.username === '' || this.state.password === '' || this.state.first_name === '' || this.state.last_name === ''){
        this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
    else {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          admin: this.state.admin
        },
      });
      // empty out state
      this.setState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        admin: false
      });
    }
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <>
        <Form className="formPanel" onSubmit={this.registerUser}>
          <FormGroup>
            
            <h2>Register</h2>
            {this.props.store.errors.registrationMessage && (
              <h3 className="alert" role="alert">
                {this.props.store.errors.registrationMessage}
              </h3>
            )}

            <div>
              <Label htmlFor="firstName">
                  First Name:
                  <Input
                    type="text"
                    name="firstName"
                    value={this.state.first_name}
                    required
                    onChange={this.handleInputChangeFor('first_name')}
                  />
                </Label>
              </div>

              <div>
                <Label htmlFor="lastName">
                  Last Name:
                  <Input
                    type="text"
                    name="lastName"
                    value={this.state.last_name}
                    required
                    onChange={this.handleInputChangeFor('last_name')}
                  />
                </Label>
              </div>

              <div>
                <Label htmlFor="username">
                  Username:
                  <Input
                    type="text"
                    name="username"
                    value={this.state.username}
                    required
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
                  value={this.state.password}
                  required
                  onChange={this.handleInputChangeFor('password')}
                />
              </Label>
            </div>

            <br/>

            <div>
              <Button color="success" onClick={this.registerUser}>Register</Button>
            </div>

          </FormGroup>

          <center>
            <h5>Already have an account?</h5>
            <Button
              onClick={() => {
                this.props.history.push('/login');
              }}
            >
              Login
            </Button>
          </center>

        </Form>
      </>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(RegisterForm));

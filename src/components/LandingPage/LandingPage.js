import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Jumbotron, Col, Row, Container} from 'reactstrap';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {
  state = {
    heading: 'Welcome',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <Jumbotron className="landingJumbotron">
        <Container>
          <Row>
            <Col xs="8" className="landingDescription">
              <h1>{this.state.heading}</h1>

              <h5>
                SONGWRITER is the place your songs can call home. Edit and store
                the songs you've worked so hard to write so that you won't ever need 
                to worry about losing your ideas again.
              </h5>

              <hr/>
              
              <p>
                Simply login to your account or create a new one and start plugging away!
              </p>

            </Col>
            <Col xs="4">
              <RegisterForm />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);

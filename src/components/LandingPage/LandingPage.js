import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Jumbotron, Col, Row, Container} from 'reactstrap';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      // <Jumbotron className="landingJumbotron">
      <div className="pageContainer landingPageContainer">
        <Container>
          <Row>
            <Col xs="12" lg="8">
              <div className="landingDescription">
                <h1>Welcome</h1>

                <h5>
                  SONGWRITER is the place your songs can call home. Edit and store
                  the songs you've worked so hard to write so that you won't ever need 
                  to worry about losing your ideas again.
                </h5>

                <hr/>
                
                <p>
                  Simply login to your account or create a new one and start plugging away!
                </p>
              </div>

            </Col>
            <Col xs="12" lg="4">
              <RegisterForm />
            </Col>
          </Row>
        </Container>
      {/* </Jumbotron> */}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);

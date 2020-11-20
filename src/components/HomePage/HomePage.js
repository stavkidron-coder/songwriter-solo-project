import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Jumbotron, Container, Row, Col, Button} from 'reactstrap';
import './HomePage.css';

class HomePage extends Component {

  newSongBtn = () => {
    console.log('newSongBtn clicked');
    this.props.dispatch({type: 'ADD_SONG', payload: {nav:this}});
    // this.props.history.push('/edit-song');
  }

  render() {
    return (
      <Jumbotron className="homeJumbotron">
        
        <Container>
          <Row>
            <Col xs="4" className="leftJumbotron">

              <h1 id="welcome">
                Welcome, {this.props.store.user.first_name}!
              </h1>

              <hr className="homeHr"/>

              <p>
                Get started by clicking "New Song" or check out your saved songs
                by navigating to the "In-The-Works" or the "Completed" pages in the nav bar.
              </p>

              <Button
                color="success"
                onClick={this.newSongBtn}>
                  New Song
              </Button>

              {/* <p>Your ID is: {this.props.store.user.id}</p> */}

            </Col>
          </Row>
          
        </Container>
      </Jumbotron>
    );
  }
}

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStoreToProps)(HomePage));

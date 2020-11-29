import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SongCard from '../SongCard/SongCard';
import {Jumbotron, Container, Row, Col, Button} from 'reactstrap';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const plusIcon = <FontAwesomeIcon icon={faPlus}/>

class HomePage extends Component {

  componentDidMount () {
    this.props.dispatch({type: 'GET_RECENT_SONGS', payload: this.props.store.user.id});
    
  }

  newSongBtn = () => {
    console.log('newSongBtn clicked');
    this.props.dispatch({type: 'ADD_SONG', payload: {nav:this}});
    // this.props.history.push('/edit-song');
  }

  render() {
    return (
      <>
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
                by navigating to the "In Progress" or the "Completed" pages in the nav bar
                by clicking the "My Songs" button.
              </p>

              <Button
              className="btn-purple-dark"
                id="addSongBtn"
                onClick={this.newSongBtn}>
                  New Song {plusIcon}
              </Button>

            </Col>
          </Row>
          
        </Container>
      </Jumbotron>
      
      <div className="recentHeader">
          <Container>
            <h2>RECENT SONGS</h2>
          </Container> 
        </div>

      <div className="homeBody">
        
        <Container>

          {this.props.store.recentSongsReducer.map((song) => {
            return(
              <SongCard song={song}/>
            )
          })}
          
        </Container>
      </div>
    </>
    );
  }
}

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStoreToProps)(HomePage));

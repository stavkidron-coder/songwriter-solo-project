import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Jumbotron, Container, Row, Col, Button} from 'reactstrap';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';

const plusIcon = <FontAwesomeIcon icon={faPlus}/>
const editIcon = <FontAwesomeIcon icon={faEdit}/>
const eyeIcon = <FontAwesomeIcon icon={faEye}/>

class HomePage extends Component {

  componentDidMount () {
    this.props.dispatch({type: 'GET_RECENT_SONGS', payload: this.props.store.user.id});
    
  }

  newSongBtn = () => {
    console.log('newSongBtn clicked');
    this.props.dispatch({type: 'ADD_SONG', payload: {nav:this}});
    // this.props.history.push('/edit-song');
  }

  editSongBtn = (event) => {
    console.log('edit song button clicked', event.target.id);
    const songId = event.target.id
    this.props.history.push(`/edit-song/${songId}`);
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
                by navigating to the "In-The-Works" or the "Completed" pages in the nav bar.
              </p>

              <Button
                id="addSongBtn"
                onClick={this.newSongBtn}>
                  New Song {plusIcon}
              </Button>

              {/* <p>Your ID is: {this.props.store.user.id}</p> */}

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
              <div key={song.id} className="homeListItem">
                <Row>
                  <Col xs="8">
                    <h3>{song.title}</h3>
                    <p>{song.date}</p>
                  </Col>
                  <Col xs="4" className="homeButtonCol">
                    <Button
                      color="primary"
                      className="homeBtns"
                      id={song.id}
                      onClick={this.editSongBtn}
                    >
                      Edit Song {editIcon}
                    </Button>
                    <br/>
                    <Button
                      color="primary"
                      className="homeBtns"
                      onClick={this.viewSongBtn}
                    >
                      View Song {eyeIcon}
                    </Button>
                  </Col>
                </Row>      
              </div>
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

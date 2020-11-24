import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Completed.css';
import {Jumbotron, Container, Col, Row, Button} from 'reactstrap';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Completed extends Component {

  componentDidMount = () => {
    this.getSongs();
  }

  getSongs = () => {
    this.props.dispatch({type: 'GET_COMPLETED_SONGS'});
  }

  editSongBtn = (event) => {
    console.log('edit song button clicked', event.target.id);
    const songId = event.target.id
    this.props.history.push(`/edit-song/${songId}`);
  }

  render() {
    return (
      <div>
        <Jumbotron className="completedJumbotron">
          <Container>
            <div className="completedJumbotronTitle">
              <h1>Completed Songs</h1>
              <hr/>
              <p>This is where your completed songs live</p>
            </div>
          </Container> 
        </Jumbotron>

        <div className="completedBody">

          <Container>
            
              {/* {JSON.stringify(this.props.store.songs)} */}
              {this.props.store.completedSongs.map((song) => {
                return(
                  <div key={song.id} className="completedListItem">
                    <Row>
                      <Col xs="8">
                        <h3>{song.title}</h3>
                        <p>{song.date}</p>
                        {/* {JSON.stringify(song)} */}
                      </Col>
                      <Col xs="4" className="buttonCol">
                        <Button
                          color="primary"
                          className="completedBtns"
                          id={song.id}
                          onClick={this.editSongBtn}  
                        >
                          Edit Song
                        </Button>
                        <br/>
                        <Button color="primary" className="completedBtns">
                          View Song
                        </Button>
                      </Col>
                    </Row>      
                  </div>
                )
              })}
          
          </Container>
        </div>
        
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Completed);
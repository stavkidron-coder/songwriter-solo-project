import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './InTheWorks.css';
import {Jumbotron, Container, Col, Row, Button} from 'reactstrap';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class InTheWorks extends Component {

  componentDidMount = () => {
    this.getSongs();
     
  }

  getSongs = () => {
    this.props.dispatch({type: 'GET_ITW_SONGS'});
    
  }

  viewSongBtn = () => {
    console.log('viewSong Btn clicked');
    this.props.history.push('/view-song');
  }

  editSongBtn = (event) => {
    console.log('edit song button clicked', event.target.id);
    const songId = event.target.id
    this.props.history.push(`/edit-song/${songId}`);
  }

  render() {
    return (
      <div>
        <Jumbotron className="itwJumbotron">
          <Container>
            <div className="itwTitle">
              <h1>"IN-THE-WORKS"</h1>
              <hr className="itwHr"/>
              <p>This is where your unfinished songs live</p>
            </div>
          </Container> 
        </Jumbotron>

        <div className="itwBody">

          <Container>
            
              {/* {JSON.stringify(this.props.store.songs)} */}
              {this.props.store.itwSongs.map((song) => {
                return(
                  <div key={song.id} className="itwListItem">
                    <Row>
                      <Col xs="8">
                        <h3>{song.title}</h3>
                        <p>{song.date}</p>
                      </Col>
                      <Col xs="4" className="buttonCol">
                        <Button
                          color="primary"
                          className="itwBtns"
                          id={song.id}
                          onClick={this.editSongBtn}
                        >
                          Edit Song
                        </Button>
                        <br/>
                        <Button
                          color="primary"
                          className="itwBtns"
                          onClick={this.viewSongBtn}
                        >
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

export default connect(mapStoreToProps)(InTheWorks);
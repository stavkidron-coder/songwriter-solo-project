import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Completed.css';
import SongCard from '../SongCard/SongCard';
import {Jumbotron, Container, Col} from 'reactstrap';

class Completed extends Component {

  componentDidMount = () => {
    this.getSongs();
  }

  getSongs = () => {
    this.props.dispatch({type: 'GET_COMPLETED_SONGS'});
  }

  render() {
    return (
      <div>

{/* Completed page Jumbotron */}

        <Jumbotron className="completedJumbotron">
          <Container>
            <Col xs="12">
              <div className="completedJumbotronTitle">
                <h1>Completed Songs</h1>
                <hr className="itwHr"/>
                <p>This is where your completed songs live</p>
              </div>
            </Col>
          </Container> 
        </Jumbotron>

{/* Completed page body */}

        <div className="completedBody">

          <Container>
            
            {this.props.store.completedSongs.map((song) => {
              return(
                <SongCard song={song}/>
              )
            })}
          
          </Container>

        </div>
        
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Completed);
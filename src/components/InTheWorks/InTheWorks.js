import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SongCard from '../SongCard/SongCard';
import './InTheWorks.css';
import {Jumbotron, Container, Col} from 'reactstrap';


class InTheWorks extends Component {

  componentDidMount = () => {
    this.getSongs();    
  }

  getSongs = () => {
    this.props.dispatch({type: 'GET_ITW_SONGS'});   
  }

  render() {
    return (
      <div>
        <Jumbotron className="itwJumbotron">
          <Container>
            <Col xs="12">
              <div className="itwTitle">
                <h1>In Progress...</h1>
                <hr className="itwHr"/>
                <p>This is where your unfinished songs live</p>
              </div>
            </Col>
          </Container> 
        </Jumbotron>

        <div className="itwBody">
          <Container>
            {this.props.store.itwSongs.map((song) => {
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

export default connect(mapStoreToProps)(InTheWorks);
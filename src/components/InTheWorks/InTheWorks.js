import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SongCard from '../SongCard/SongCard';
import './InTheWorks.css';
import {Jumbotron, Container} from 'reactstrap';

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
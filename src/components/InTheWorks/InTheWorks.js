import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './InTheWorks.css';
import {Jumbotron, Container, Col, Row, ListGroup, ListGroupItem, Button} from 'reactstrap';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class InTheWorks extends Component {

  componentDidMount = () => {
    this.getSongs();
  }

  getSongs = () => {
    this.props.dispatch({type: 'GET_SONGS'});
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <Col xs="8">
              <h1>In-The-Works</h1>
            </Col>
          </Container> 
        </Jumbotron>

        <Container>
          <ListGroup>
            {/* {JSON.stringify(this.props.store.songs)} */}
            {this.props.store.songs.map((song) => {
              return(
                <ListGroupItem key={song.id} className="itwListItem">
                  <div>
                    <Row>

                      <Col xs="8">
                        <h3>{song.title}</h3>
                        <p>{song.date}</p>
                      </Col>

                      <Col xs="4" className="buttonCol">
                        <Button color="primary" size="sm" className="itwBtns">
                          Edit Song
                        </Button>
                        <div></div>
                        <Button color="primary" size="sm" className="itwBtns">
                          View Song
                        </Button>
                      </Col>

                    </Row>
                  </div>        
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Container>
        

      </div>
    );
  }
}

export default connect(mapStoreToProps)(InTheWorks);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import './ViewSong.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

class SongPage extends Component {

    componentDidMount = () => {
        this.props.dispatch({type: 'GET_SONG_BY_ID', payload: this.props.match.params.id});
    }

    render() {
        return (
        <>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col xs="8">
                            <h2>{this.props.store.songsReducer.title}</h2>
                            <p>Date Created: {this.props.store.songsReducer.date}</p>
                            {/* <p>Completed Status: {this.props.store.songsReducer.completed_status}</p> */}
                        </Col>
                        <Col xs="4">
                            <p>Key: {this.props.store.songsReducer.key}</p>
                            <p>Tempo: {this.props.store.songsReducer.tempo}</p>
                            <p>Time Signature: {this.props.store.songsReducer.time_signature}</p>
                        </Col>
                    </Row>
                    
                    
                </Container>
            </Jumbotron>

            {/* {JSON.stringify(this.props.store.songsReducer)} */}
            
            <Container>
                <Row>
                    <Col xs="6">
                        <h3>
                            Lyrics:
                        </h3>
                        <div className="vsLyricsContainer">
                            <p>
                                {this.props.store.songsReducer.lyrics}
                            </p>
                        </div>
                        
                    </Col>

                    <Col xs="6">
                        <h3>
                            Instruments:
                        </h3>
                        <div className="vsInstrumentsContainer">
                            <p>
                                {this.props.store.songsReducer.instruments}
                            </p>
                        </div>
                        
                    </Col>
                </Row>
                
                <Row>
                    <Col xs="6">
                        <h3>
                            Notes:
                        </h3>
                        <div className="vsNotesContainer">
                            <p>
                                {this.props.store.songsReducer.notes}
                            </p>
                        </div>
                    </Col>
                    
                    <Col xs="6">
                        <h3>
                            Reference Songs
                        </h3>
                        <div className="vsReferencesContainer">
                            <p>
                                {this.props.store.songsReducer.reference_songs}
                            </p>
                        </div>
                    </Col>
                </Row>
                
            </Container>
            

        </>
        );
    }
}

export default connect(mapStoreToProps)(SongPage);
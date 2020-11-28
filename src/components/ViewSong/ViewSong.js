import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Jumbotron, Container, Row, Col, Button} from 'reactstrap';
import './ViewSong.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const editIcon = <FontAwesomeIcon icon={faEdit}/>

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

class SongPage extends Component {

    componentDidMount = () => {
        this.props.dispatch({type: 'GET_SONG_BY_ID', payload: this.props.match.params.id});
    }

    editSongBtn = (event) => {
        console.log('edit song button clicked', event.target.id);
        const songId = event.target.id
        this.props.history.push(`/edit-song/${songId}`);
      }

    render() {
        return (
        <>
        <Jumbotron className="viewSongJumbotron">
                <Container>
                    <div className="viewSongJumbotronTitle">
                        <Row>
                            <Col xs="6"> 
                                <h1>{this.props.store.songsReducer.title}</h1>
                                <p>Date Created: {this.props.store.songsReducer.date}</p>
                                <Button
                                    className="editBtn btn-purple-dark"
                                    color="outline-primary"
                                    onClick={this.editSongBtn}
                                    id={this.props.store.songsReducer.id}
                                >
                                    Edit Song {editIcon}
                                </Button>
                            </Col>
                            <Col xs="6">
                                <p>Key: {this.props.store.songsReducer.key}</p>
                                <p>Tempo: {this.props.store.songsReducer.tempo}</p>
                                <p>Time Signature: {this.props.store.songsReducer.time_signature}</p>
                            </Col>
                        </Row>
                    </div>  
                </Container>
            </Jumbotron>

        <div className="viewSongBody">
            <Container>
                <Row>
                    <Col xs="6">
                        <h3 className="vsHeadings">Lyrics</h3>
                        <div className="vsContentBoxes">
                            <p>{this.props.store.songsReducer.lyrics}</p>
                        </div>

                        <h3 className="vsHeadings">Instruments</h3>
                        <div className="vsContentBoxes">
                            <p>{this.props.store.songsReducer.instruments}</p>
                        </div>
                    </Col>
                    <Col xs="6">

                        <h3 className="vsHeadings">Sections & Chords</h3>
                        <div className="vsContentBoxes">
                            {this.props.store.sectionsReducer.map((section) => {
                                    return(
                                        <div className="vsSectionItem">
                                            <h6>{section.name}:</h6>
                                            <p> {section.chords}</p>
                                        </div> 
                                    )
                                })}
                        </div>

                        <h3 className="vsHeadings">Reference Songs</h3>
                        <div className="vsContentBoxes">
                            <p>{this.props.store.songsReducer.reference_songs}</p>
                        </div>

                        <h3 className="vsHeadings">Notes</h3>
                        <div className="vsContentBoxes">
                            <p>{this.props.store.songsReducer.notes}</p>
                        </div>
                    </Col>
                    
                </Row> 

            </Container>

        </div>
        </>
        );
    }
}

export default connect(mapStoreToProps)(SongPage);
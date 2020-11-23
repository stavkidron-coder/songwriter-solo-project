import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Add-EditSongPage.css';
import SectionModal from '../SectionModal/SectionModal';
import {Jumbotron,
        Container,
        Row,
        Col,
        Button,
        Form,
        FormGroup,
        Label,
        Input}
    from 'reactstrap';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AddEditSongPage extends Component {

    componentDidMount() {
        // post a new blank song to DB
        // returns id
        this.props.dispatch({type: 'GET_SONG_ID', payload: this.props.match.params.id});
        // Gets specific song information from DB to display in the text fields
        this.props.dispatch({type: 'GET_SONG_BY_ID', payload: this.props.match.params.id});
        
        // console.log('RETURNING SONG ID', this.props.store.songIdReducer);
    }

    componentDidUpdate() {
        // checks for any changes between the local sate and the reducer.
        // If there is a change, then the current local state will get updated.
        if(this.state.song.songId !== this.props.store.songsReducer.songId){
            this.setState({song: this.props.store.songsReducer})
        }
    }

    // local state that hold all of the song information
    state = {
        song: {
            songId: 0,
            title: "New Song",
            key: "",
            tempo: 0,
            time_signature: "",
            lyrics: "",
            chords: "",
            instruments: "",
            references: "",
            notes: "",
            completed_status: false,
        }
    };

  // redirects all inputed info to the correct key value pair in state
  handleChange = (event, typeParam) => {
        this.setState({
            song: {
                ...this.state.song,
                [typeParam]: event.target.value
            }
        });
  }

//   setCompletedStatus = (completedStatus) => {
//       if(completedStatus === "TRUE"){
//           return true;
//       }
//       else {
//           return false;
//       }
//   }

  // toggles completed checkbox between true and false
  completedToggle = () => {
    console.log('completedStatus:', this.state.song.completed_status);
    
    if (this.state.song.completed_status === true) {
        this.setState({
            song: {
                ...this.state.song,
                completed_status: false
            }
        });
    }
    else if (this.state.song.completed_status === false) {
        this.setState({
            song: {
                ...this.state.song,
                completed_status: true
            }
        });
    }
    // console.log('completed status:', this.state.song);
  }

    // updates DB with new information for song
    saveBtn = () => {
        let song = {...this.state.song, songId: this.props.match.params.id}
        console.log('song', song);
        console.log(this.props.match.params.id);
        
        this.props.dispatch({type: 'UPDATE_SONG', payload: song});
    }

  render() {
    return (
        <div>
            <Jumbotron className="addEditPageJumbotron">
                <Container>
                    <Row>
                        <Col xs="6">
                            {/* {JSON.stringify(this.state.song.title)} */}
                            <h2>{this.state.song.title}</h2>
                            <hr/>
                            <p>
                                Enter in the information for your song! When you're done,
                                you can decide if your song is complete by checking the
                                completed box at the bottom of the page. If you don't want
                                your
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Container className="songForm">
                <Form>
                    <FormGroup>
                        <Row>

                            <Col xs="4" className="r1c1">
                                <Label for="title">*Song Title:</Label>
                                <Input
                                    value={this.state.song.title}
                                    id="title"
                                    onChange={(event) => this.handleChange(event, 'title')}    
                                />
                                <br/>

                                <Label for="key">Key:</Label>
                                <Input
                                    value={this.state.song.key}
                                    id="key"
                                    onChange={(event) => this.handleChange(event, 'key')}     
                                />
                                <br/>

                                <Label for="tempo">Tempo (BPM):</Label>
                                <Input
                                    value={this.state.song.tempo}
                                    id="tempo"
                                    type="number"
                                    onChange={(event) => this.handleChange(event, 'tempo')}     
                                />
                                <br/>

                                <Label for="time-sig">Time Signature:</Label>
                                <Input
                                    type="text"
                                    defaultValue={this.state.song.time_signature}
                                    id="time-sig"
                                    onChange={(event) => this.handleChange(event, 'time_signature')}
                                />
                            </Col>

                            <Col xs="4" className="r1c2">
                                <Label for="lyrics">Lyrics:</Label>
                                <Input
                                    value={this.state.song.lyrics}
                                    id="lyrics"
                                    type="textarea"
                                    className="textArea"
                                    onChange={(event) => this.handleChange(event, 'lyrics')}     
                                />
                            </Col>

                            <SectionModal songId={this.props.match.params.id}/>

                        </Row>

                        <Row>

                            <Col xs="4" className="r2c1">
                                <Label for="instruments">Instruments:</Label>
                                <Input
                                    value={this.state.song.instruments}
                                    id="instruments"
                                    type="textarea"
                                    className="textArea"
                                    onChange={(event) => this.handleChange(event, 'instruments')}     
                                />
                            </Col>

                            <Col xs="4" className="r2c1">
                                <Label for="refSongs">Reference Songs:</Label>
                                <Input
                                    value={this.state.song.references}
                                    id="refSongs"
                                    type="textarea"
                                    className="textArea"
                                    onChange={(event) => this.handleChange(event, 'references')}     
                                />
                            </Col>

                            <Col xs="4" className="r2c1">
                                <Label for="notes">Other Notes:</Label>
                                <Input
                                    value={this.state.song.notes}
                                    id="notes"
                                    type="textarea"
                                    className="textArea"
                                    onChange={(event) => this.handleChange(event, 'notes')}     
                                />
                            </Col>

                        </Row>
                        
                    </FormGroup>
                </Form>

                <div className="btnRow">
                    <Row>
                        <Col>
                                {this.state.song.completed_status ?
                                    <Button onClick={this.completedToggle}>
                                        Mark song as "In-The- Works"
                                    </Button>
                                    :
                                    <Button onClick={this.completedToggle}>
                                        Mark song as "Completed"
                                    </Button>
                                }


                                {/* <Label for="completedStatus">Complete song</Label>
                                <Input type="checkbox" id="completedStatus" name="completeStatus" defaultChecked={this.state.completed} onClick={this.checkboxToggle}/> */}
                            
                            <Button color="success" onClick={this.saveBtn}>Save</Button>
                            <Button color="danger">Delete Song</Button>
                        </Col>
                        
                    </Row>
                    
                </div>

            </Container>
        </div>
    );
  }
}

export default connect(mapStoreToProps)(AddEditSongPage);

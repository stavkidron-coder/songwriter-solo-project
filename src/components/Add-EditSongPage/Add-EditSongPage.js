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
        console.log('RETURNING SONG ID', this.props.store.songIdReducer);
    }

    // componentDidUpdate(props, state) {
    //     // console.log('RETURNING SONG ID', props.store.songIdReducer.id);
        
    //     if(props.store.REDUCER_NAME_THAT_HOLDS_NEW_SONG_ID !== state.song.newSongId){
    //         this.setState({
    //             song: {
    //                 ...this.state.song,
    //                 newSongId: props.store.REDUCER_NAME_THAT_HOLDS_NEW_SONG_ID
    //             }
    //         });
    //     }
    // }

  state = {
    song: {
        newSongId: 0,
        title: "New Song",
        key: "",
        tempo: 0,
        timeSig: "",
        lyrics: "",
        chords: "",
        instruments: "",
        references: "",
        notes: "",
        is_complete: "false"
    }  
  };

  // redirects all inputed info to the correct key
  handleChange = (event, typeParam) => {
        this.setState({
            song: {
                ...this.state.song,
                [typeParam]: event.target.value
            }
        });
  }

  checkboxToggle = () => {
    if (document.getElementById('completedStatus').checked) 
  {
      this.setState({
          song: {
              ...this.state.song,
              is_complete: document.getElementById('completedStatus').value = "true"
          }
      });
  }
    console.log('completed status:', this.state.song.is_complete);
  }

saveBtn = () => {
    console.log('song', this.state.song);
    this.props.dispatch({type: 'ADD_SONG', payload: this.state.song});
}

  render() {
    return (
        <div>
            <Jumbotron className="addEditPageJumbotron">
                <Container>
                    <Row>
                        <Col xs="6">
                            <h2>New Song</h2>
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
                                    id="title"
                                    onChange={(event) => this.handleChange(event, 'title')}    
                                />
                                <br/>

                                <Label for="key">Key:</Label>
                                <Input
                                    id="key"
                                    onChange={(event) => this.handleChange(event, 'key')}     
                                />
                                <br/>

                                <Label for="tempo">Tempo:</Label>
                                <Input
                                    id="tempo"
                                    type="number"
                                    onChange={(event) => this.handleChange(event, 'tempo')}     
                                />
                                <br/>

                                <Label for="time-sig">Time Signature:</Label>
                                <Input
                                    id="time-sig"
                                    onChange={(event) => this.handleChange(event, 'timeSig')}    
                                />
                            </Col>

                            <Col xs="4" className="r1c2">
                                <Label for="lyrics">Lyrics:</Label>
                                <Input
                                    id="lyrics"
                                    type="textarea"
                                    className="textArea"
                                    onChange={(event) => this.handleChange(event, 'lyrics')}     
                                />
                            </Col>

                            <SectionModal songId={this.state.newSongId}/>

                        </Row>

                        <Row>

                            <Col xs="4" className="r2c1">
                                <Label for="instruments">Instruments:</Label>
                                <Input
                                    id="instruments"
                                    type="textarea"
                                    className="textArea"
                                    onChange={(event) => this.handleChange(event, 'instruments')}     
                                />
                            </Col>

                            <Col xs="4" className="r2c1">
                                <Label for="refSongs">Reference Songs:</Label>
                                <Input
                                    id="refSongs"
                                    type="textarea"
                                    className="textArea"
                                    onChange={(event) => this.handleChange(event, 'references')}     
                                />
                            </Col>

                            <Col xs="4" className="r2c1">
                                <Label for="notes">Other Notes:</Label>
                                <Input
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
                            <div className="completeSong">
                                <Label for="completedStatus">Complete song</Label>
                                <Input type="checkbox" id="completedStatus" name="completeStatus" onClick={this.checkboxToggle}/>
                            </div>
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

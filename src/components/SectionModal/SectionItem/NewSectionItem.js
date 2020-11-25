import React, {Component} from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {Row, Col, Button} from 'reactstrap';

class NewSectionItem extends Component {

    deleteBtn = () => {
        // let songId = this.props.store.sectionsReducer.song_id;
        // let sectionId = this.props.store.sectionsReducer.id;
        console.log('Reload to delete!');
        // this.props.dispatch({type: 'DELETE_SECTION', payload: {songId: songId, sectionId: sectionId}});
    }
    
    render() {
        return(
            <div className="sectionCard">
                <Row>
                    <Col xs="8">
                        <p>{this.props.songSection.section}</p>
                        <hr/>
                        <p>{this.props.songSection.chords}</p>
                    </Col>
                    <Col>
                        <Button color="danger" onClick={this.deleteBtn}>Delete</Button>
                    </Col>
                </Row> 
            </div>
             
        )
    }
}

export default connect(mapStoreToProps)(NewSectionItem);
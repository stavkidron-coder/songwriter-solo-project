import React, {Component} from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {Row, Col, Button} from 'reactstrap';

class ExistingSectionItem extends Component {

    deleteBtn = () => {
        let songId = this.props.section.song_id;
        console.log('songId for delete section', songId);
        this.props.dispatch({type: 'DELETE_SECTION', payload: songId});
    }
    
    render() {
        return(
            <div className="sectionCard">
                <Row>
                    <Col xs="8">
                        <p>{this.props.section.name}</p>
                        <hr/>
                        <p>{this.props.section.chords}</p>
                    </Col>
                    <Col>
                        <Button color="danger" onClick={this.deleteBtn}>Delete</Button>
                    </Col>
                </Row>  
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ExistingSectionItem);
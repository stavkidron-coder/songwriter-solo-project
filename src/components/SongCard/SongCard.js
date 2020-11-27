import React, {Component} from 'react';
import './SongCard.css';
import DropDownBtns from '../DropDownBtns/DropDownBtns';
import {Row, Col} from 'reactstrap';

class SongCard extends Component {
    render(){
        return(
            <div key={this.props.song.id} className="songCardContainer">
                <Row>

                  <Col xs="8">
                    <h3>{this.props.song.title}</h3>
                    <p>{this.props.song.date}</p>
                  </Col>

                  <Col xs="4" className="songCardButtonCol">
                    <DropDownBtns song={this.props.song}/> 
                  </Col>

                </Row>
                     
            </div>
        )
    }
}

export default SongCard;
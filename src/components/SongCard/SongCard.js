import React, {Component} from 'react';
import moment from 'moment';
import './SongCard.css';
import DropDownBtns from '../DropDownBtns/DropDownBtns';
import {Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
    
    const dotIcon = <FontAwesomeIcon icon={faCircle}/>

class SongCard extends Component {
    render(){
        return(
            <div key={this.props.song.id} className="songCardContainer">
                <Row>

                  <Col xs="6">
                    <h3>{this.props.song.title}</h3>
                    <p>{moment(this.props.song.date).format('MMMM Do YYYY, h:mm a')}</p>
                  </Col>

                  <Col xs="3">
                    {this.props.song.completed_status ?
                      <p className="completedStatus"><span className="completedDot">{dotIcon}</span> Completed</p>
                      :
                      <p className="completedStatus"><span className="itwDot">{dotIcon}</span> In Progress...</p>
                    }
                  </Col>

                  <Col xs="3" className="songCardButtonCol">
                    <DropDownBtns song={this.props.song}/> 
                  </Col>

                </Row>
                     
            </div>
        )
    }
}

export default SongCard;
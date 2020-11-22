import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import '../Nav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faEdit, faCheckSquare, faPlus } from '@fortawesome/free-solid-svg-icons'

const musicIcon = <FontAwesomeIcon icon={faMusic}/>
const editIcon = <FontAwesomeIcon icon={faEdit}/>
const checkIcon = <FontAwesomeIcon icon={faCheckSquare}/>
const plusIcon = <FontAwesomeIcon icon={faPlus}/>

class Dropdown extends Component {

    newSongBtn = () => {
        console.log('newSongBtn clicked');
        this.props.dispatch({type: 'ADD_SONG', payload: {nav:this}});
        // this.props.history.push('/edit-song');
      }
    
    render(){
        
        return(
            <>
                <DropdownToggle className="mySongsBtn">
                    My Songs {musicIcon}
                </DropdownToggle>

                <DropdownMenu>

                    <DropdownItem>
                        <Link className="nav-link" to="/in-the-works">
                        {editIcon} In-The-Works
                        </Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link className="nav-link" to="/completed">
                        {checkIcon} Completed
                    </Link>
                    </DropdownItem>

                    <DropdownItem divider/>

                    <DropdownItem className="nav-link" onClick={this.newSongBtn}>
                      {plusIcon}  New Song
                    </DropdownItem>

                </DropdownMenu>
            </>
        )
    }
}

export default withRouter(connect(mapStoreToProps)(Dropdown));
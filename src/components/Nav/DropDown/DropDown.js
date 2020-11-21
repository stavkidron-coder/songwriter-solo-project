import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';

class Dropdown extends Component {

    newSongBtn = () => {
        console.log('newSongBtn clicked');
        this.props.dispatch({type: 'ADD_SONG', payload: {nav:this}});
        // this.props.history.push('/edit-song');
      }
    
    render(){
        
        return(
            <>
                <DropdownToggle caret>
                    My Songs
                </DropdownToggle>

                <DropdownMenu>

                    <DropdownItem className="nav-link">
                        <Link className="nav-link" to="/in-the-works">
                        In-The-Works
                        </Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link className="nav-link" to="/completed">
                        Completed
                    </Link>
                    </DropdownItem>

                    <DropdownItem divider/>

                    <DropdownItem className="nav-link" onClick={this.newSongBtn}>
                        {/* <Link className="nav-link" to="/edit-song"> */}
                        New Song
                    {/* </Link> */}
                    </DropdownItem>

                </DropdownMenu>
            </>
        )
    }
}

export default withRouter(connect(mapStoreToProps)(Dropdown));
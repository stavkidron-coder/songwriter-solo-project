import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';

const dots = <FontAwesomeIcon icon={faEllipsisH}/>
const editIcon = <FontAwesomeIcon icon={faEdit}/>
const eyeIcon = <FontAwesomeIcon icon={faEye}/>

const DropDownBtns = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const editSongBtn = (event) => {
    console.log('edit song button clicked', event.target.id);
    const songId = event.target.id
    props.history.push(`/edit-song/${songId}`);
  }

  const viewSongBtn = (event) => {
    const songId = event.target.id
    props.history.push(`/view-song/${songId}`);
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color="light" className="dropdownOptions">
        {dots}
      </DropdownToggle>

      <DropdownMenu>
        <DropdownItem
        className="dropdownOptions"
          id={props.song.id}
          onClick={editSongBtn}>
            {editIcon} Edit Song
        </DropdownItem>

        <DropdownItem divider />

        <DropdownItem
          className="dropdownOptions"
          id={props.song.id}
          onClick={viewSongBtn}>
            {eyeIcon} View Song
          </DropdownItem>

      </DropdownMenu>
    </Dropdown>
  );
}

export default withRouter(connect(mapStoreToProps)(DropDownBtns));
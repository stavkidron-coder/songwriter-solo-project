import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

    const trashIcon = <FontAwesomeIcon icon={faTrashAlt}/>
    const crossIcon = <FontAwesomeIcon icon={faTimes}/>

const DeleteModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const deleteBtn = () => {
    let songId = props.songId;
    console.log('songId for delete', songId);
    props.dispatch({type: 'DELETE_SONG', payload: songId});
    props.history.push('/home');
}

  return (
    <div>
      <Button color="danger" onClick={toggle}>Delete {trashIcon}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="modalHeader" toggle={toggle}>Delete Song</ModalHeader>
        <ModalBody className="modalBody">
            Are you sure you want to delete this song?
            this action is permanent and cannot be undone.
        </ModalBody>
        <ModalFooter>
          <Button className="btn-red-light" onClick={deleteBtn}>Delete Song {trashIcon}</Button>{' '}
          <Button className="btn-purple" onClick={toggle}>Cancel {crossIcon}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default withRouter(connect(mapReduxStateToProps)(DeleteModal));
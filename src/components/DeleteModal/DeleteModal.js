import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
      <Button color="danger" onClick={toggle}>Delete Song</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Delete Song</ModalHeader>
        <ModalBody>
            Are you sure you want to delete this song?
            this action is permanent and cannot be undone.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={deleteBtn}>Delete Song</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default withRouter(connect(mapReduxStateToProps)(DeleteModal));
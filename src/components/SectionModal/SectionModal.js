import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Label, FormGroup, Form, Input } from 'reactstrap';
import './SectionModal.css';
import ExistingSectionItem from './SectionItem/ExistingSectionItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
    
    const plusIcon = <FontAwesomeIcon icon={faPlus}/>
    const crossIcon = <FontAwesomeIcon icon={faTimes}/>

const SectionModal = (props) => {  
  
  let sectionObject = {
        section: "",
        chords: ""
    }

    const handleChange = (event, typeParam) => {
        if(typeParam === 'section') {
            sectionObject.section = event.target.value;
        }
        else if (typeParam === 'chords'){
            sectionObject.chords = event.target.value;
        }
        else {
            return;
        }
        console.log('sectionObject:', sectionObject); 
        return sectionObject;
    }

    const submitBtn = () => {
        // console.log('sectionObject to submit', sectionObject);
        let newArray = [...secArray, sectionObject];
        pushSection(newArray);
        props.dispatch({type: 'ADD_SECTION', payload: {sectionObject: sectionObject, songId: props.songId}});
        // toggles modal window
        setModal(!modal);
    }

  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [secArray, pushSection] = useState([]);

  return (
    
    <Col xs="12" lg="4" className="r1c3">
    <Label for="chords"><h4>Song Sections & Chords:</h4></Label>
    {/* this is where the saved sections get displayed ||||| They get displayed before getting added */}
        <div className="songStructure" id="chords">
            {props.reduxState.sectionsReducer.map((section) => {
              return(
                <ExistingSectionItem section={section}/>
              )
            })}
        </div>

      <Button
        // color="success"
        onClick={toggle}
        className="addSectionBtn btn-purple-dark"
      >
        Add Section {plusIcon}
      </Button>
      
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="modalHeader" toggle={toggle}>Add a section</ModalHeader>
        <ModalBody className="modalBody">
          Add a song section and it's corresponding chords.
          <br/>
          <br/>
          <Form>
              <FormGroup>
                  <Label for="section">Section Name:</Label>
                  <Input id="section" onChange={(event) => handleChange(event, "section")}/>
              </FormGroup>
              <FormGroup>
                <Label for="chords">Chords:</Label>
                <Input id="chords" onChange={(event) => handleChange(event, "chords")}/>
              </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-purple" onClick={submitBtn}>Add {plusIcon}</Button>{' '}
          <Button className="btn-red-light" onClick={toggle}>Cancel {crossIcon}</Button>
        </ModalFooter>
      </Modal>
    </Col>


  );
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(SectionModal);
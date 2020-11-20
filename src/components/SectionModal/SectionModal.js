import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Label, FormGroup, Form, Input } from 'reactstrap';

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
        // console.log('sectionObject:', sectionObject);  
        return sectionObject;
    }

    const submitBtn = () => {
        console.log('sectionObject to submit', sectionObject);
        
        // toggles modal window
        setModal(!modal);
    }

  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    
    <Col xs="4" className="r1c3">
    <Label for="chords">Chords/Song Structure:</Label>
        <div className="songStructure" id="chords">
            {/* This is where the chords for each section will go */}   
        </div>
      <Button color="success" onClick={toggle}>Add Section</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add a section</ModalHeader>
        <ModalBody>
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
          <Button color="primary" onClick={submitBtn}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </Col>


  );
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(SectionModal);
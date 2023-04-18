import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import DisplayMembers from './DisplayMembers';

function GroupMembers(props) {
    const [showMembers, setShowMembers] = useState(false);
    const [showAddMember, setShowAddMember] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setShowMembers(true)}>
            Group Members
        </Button>
  
        <Modal 
        style={{
          maxHeight: '580px',
          margin: 0,
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)'
        }}
        scrollable={true} 
        backdrop="static" 
        show={showMembers} 
        onHide={() => setShowMembers(false)} 
        animation={false} 
        >
          <Modal.Header closeButton>
            <Modal.Title>Group Members</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {props.groupMembers.map(groupMember =>
              <DisplayMembers groupMember={groupMember}></DisplayMembers>
            )}

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowMembers(false)}>
              Close
            </Button>
            <Button variant="success" onClick={() => setShowAddMember(true) + setShowMembers(false)}>
              Add Member
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal backdrop="static" show={showAddMember} onHide={() => setShowAddMember(false)} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Group Members</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card body className="h-75">
                <Form id='GroupSettingsForm'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="User Name" />
                    </Form.Group>
                </Form>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowMembers(true) + setShowAddMember(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setShowAddMember(false)}>
              Send Invite
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default GroupMembers;
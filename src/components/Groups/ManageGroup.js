import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import DisplayActivities from '../Activities/DisplayActivities';
import CreateActivity from '../Activities/CreateActivity';
import UpdateActivity from '../Activities/UpdateActivity';
import UpdateGroup from './UpdateGroup';

function ManageGroup(props) {
    const [showSettings, setShowSettings] = useState(false);
    const [showActivities, setShowActivities] = useState(false);
    const [showCreateActivity, setShowCreateActivity] = useState(false);
    const [showUpdateActivity, setShowUpdateActivity] = useState(false);

    return (
      <>
        <Button className='mx-4' variant="primary" onClick={() => setShowSettings(true)}>
         Manage Group
        </Button>
  
        <Modal backdrop="static" show={showSettings} onHide={() => setShowSettings(false)} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Manage Group</Modal.Title>
          </Modal.Header>

          <UpdateGroup
             group={props.group}
             callShowSettings={()=> setShowSettings(true)+ setShowActivities(false) + setShowCreateActivity(false)}
             callShowActivities={()=> setShowActivities(true) + setShowCreateActivity(false) + setShowSettings(false)}
             callHideSettings={()=> setShowSettings(false)}>
          </UpdateGroup>

        </Modal>

        <Modal backdrop="static" show={showCreateActivity} onHide={() => setShowCreateActivity(false)} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Manage Group</Modal.Title>
          </Modal.Header>

            <CreateActivity 
              group={props.group}
              callShowSettings={()=> setShowSettings(true)+ setShowActivities(false) + setShowCreateActivity(false)}
              callShowActivities={()=> setShowActivities(true) + setShowCreateActivity(false) + setShowSettings(false)}
              callHideSettings={()=> setShowSettings(false)}>             
            </CreateActivity>

        </Modal>

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
        show={showActivities} onHide={() => setShowActivities(false)} 
        animation={false} 
        >
          <Modal.Header closeButton>
            <Modal.Title>Manage Group</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Nav className="justify-content-center" fill  variant="pills" defaultActiveKey="2">
              <Nav.Item>
                <Nav.Link onClick={() => setShowSettings(true)+ setShowActivities(false) + setShowCreateActivity(false)} eventKey="1">Settings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setShowActivities(true) + setShowCreateActivity(false) + setShowSettings(false)} eventKey="2">Activities</Nav.Link>
              </Nav.Item>
            </Nav>

            {props.groupActivities.map(groupActivity =>
              <DisplayActivities 
                groupActivity={groupActivity} 
                callShowSettings={()=> setShowSettings(true)+ setShowActivities(false) + setShowCreateActivity(false)}
                callShowActivities={()=> setShowActivities(true) + setShowCreateActivity(false) + setShowSettings(false)}
                callHideActivities={()=> setShowActivities(false)}
                callShowUpdateActivity={()=> setShowUpdateActivity(true)}>
              </DisplayActivities>
            )}

          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={() => setShowCreateActivity(true) + setShowActivities(false)}>
              Create Activity
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal backdrop="static" show={showUpdateActivity} onHide={() => setShowUpdateActivity(false)} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Manage Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Nav className="justify-content-center" fill  variant="pills" defaultActiveKey="2">
            <Nav.Item>
              <Nav.Link onClick={() => props.callShowSettings()} eventKey="1">Settings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => props.callShowActivities()} eventKey="2">Activities</Nav.Link>
            </Nav.Item>
          </Nav>

          <UpdateActivity groupActivity={props.groupActivity} ></UpdateActivity>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.callShowActivities()}>
            Cancel
          </Button>
          <Button type='submit' form='UpdateGroupActivityForm' variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
      </>
    );
  }

export default ManageGroup;
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import GroupSettings from './GroupSettings';
import GroupActivities from './GroupActivities';
import DisplayActivities from './DisplayActivities';

function ManageGroup(props) {
    const [showSettings, setShowSettings] = useState(false);
    const [showActivities, setShowActivities] = useState(false);
    const [showCreateActivity, setShowCreateActivity] = useState(false);

    return (
      <>
        <Button className='mx-4' variant="primary" onClick={() => setShowSettings(true)}>
         Manage Group
        </Button>
  
        <Modal backdrop="static" show={showSettings} onHide={() => setShowSettings(false)} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Manage Group</Modal.Title>
          </Modal.Header>

          <GroupSettings
             group={props.group}
             callShowSettings={()=> setShowSettings(true)+ setShowActivities(false) + setShowCreateActivity(false)}
             callShowActivities={()=> setShowActivities(true) + setShowCreateActivity(false) + setShowSettings(false)}
             callHideSettings={()=> setShowSettings(false)}>
          </GroupSettings>

        </Modal>

        <Modal backdrop="static" show={showCreateActivity} onHide={() => setShowCreateActivity(false)} animation={false} centered>
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

            <GroupActivities></GroupActivities>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowActivities(true) + setShowCreateActivity(false)}>
              Cancel
            </Button>
            <Button type='submit' form='GroupActivitiesForm' variant="primary" onClick={() => setShowActivities(true) + setShowCreateActivity(false)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal backdrop="static" show={showActivities} onHide={() => setShowActivities(false)} animation={false} centered>
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
              <DisplayActivities groupActivity={groupActivity} callShowActivities={()=>setShowCreateActivity(true) + setShowActivities(false)}></DisplayActivities>
            )}

          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={() => setShowCreateActivity(true) + setShowActivities(false)}>
              Create Activity
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default ManageGroup;
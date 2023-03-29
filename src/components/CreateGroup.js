import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import GroupSettings from './GroupSettings';
import GroupActivities from './GroupActivities';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function CreateGroup() {
    const [showSettings, setShowSettings] = useState(false);
    const [showActivities, setShowActivities] = useState(false);
    const [showCreateActivity, setShowCreateActivity] = useState(false);
  
    return (
      <>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip className='mt-2'>Create a Group</Tooltip>}>
          <a onClick={() => setShowSettings(true)}>
            <img src="img/avatars/add-icon.png" class="avatar mt-1 img-fluid rounded-circle" alt="User" />
          </a>
        </OverlayTrigger>
        
        <Modal backdrop="static" show={showSettings} onHide={() => setShowSettings(false)} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Create Group</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Nav className="justify-content-center" fill  variant="pills" defaultActiveKey="1">
            <Nav.Item>
              <Nav.Link onClick={() => setShowSettings(true) + setShowActivities(false)} eventKey="1">Settings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => setShowActivities(true) + setShowSettings(false)} eventKey="2">Members</Nav.Link>
            </Nav.Item>
          </Nav>

            <GroupSettings></GroupSettings>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowSettings(false)}>
              Cancel
            </Button>
            <Button type='submit' form='GroupSettingsForm' variant="primary" onClick={() => setShowSettings(false)}>
              Create Group
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal backdrop="static" show={showCreateActivity} onHide={() => setShowCreateActivity(false)} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Manage Group</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Nav className="justify-content-center" fill  variant="pills" defaultActiveKey="2">
            <Nav.Item>
              <Nav.Link onClick={() => setShowSettings(true)+ setShowActivities(false) + setShowCreateActivity(false)} eventKey="1">Active</Nav.Link>
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
      </>
    );
  }

export default CreateGroup;
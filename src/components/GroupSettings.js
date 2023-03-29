import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';

function GroupSettings(props) {

    const updateGroup = async (e) => {
        //e.preventDefault()
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);

        const updateGroupUrl = "https://schedule-functions.azurewebsites.net/api/UpdateGroup?code=I85av-XCpOPQhAMW9u5XTfU9FD678b7XxpUlsX-o6zZjAzFuN560Bg==&"
        + "group_id=" + props.group.group_Id + "&group_name=" + payload.groupName + "&group_desc=" + payload.groupDesc;

        console.log(payload);
        const activitiesResult = await fetch(updateGroupUrl)
        console.log(activitiesResult);
    }

    return (
        <>
        <Modal.Body>
            <Nav className="justify-content-center" fill  variant="pills" defaultActiveKey="1">
              <Nav.Item>
                <Nav.Link onClick={() => props.callShowSettings()} eventKey="1">Settings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => props.callShowActivities()} eventKey="2">Activities</Nav.Link>
              </Nav.Item>
            </Nav>
            <Card body className="h-75">
                <Form id='GroupSettingsForm' onSubmit={updateGroup}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Group Name</Form.Label>
                        <Form.Control name="groupName" type="text" defaultValue={props.group.group_Name} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="groupDesc" as='textarea' rows={4} maxlength="200" style={{resize:'none'}} type="text" defaultValue={props.group.group_Description} />
                    </Form.Group>
                </Form>
            </Card>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={() => props.callHideSettings()}>
            Close
        </Button>
        <Button type='submit' form='GroupSettingsForm' variant="primary">
            Save Changes
        </Button>
        </Modal.Footer>
        </>
    );
}

export default GroupSettings;
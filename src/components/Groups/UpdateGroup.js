import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function UpdateGroup(props) {

    const SubmitUpdateGroupForm = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);

        const url = "https://schedule-functions.azurewebsites.net/api/UpdateGroup?code=I85av-XCpOPQhAMW9u5XTfU9FD678b7XxpUlsX-o6zZjAzFuN560Bg==";

        const data = {
            User_Id: 1
            , Group_Id: props.group.group_Id
            , Group_Name: payload.groupName
            , Group_Description: payload.groupDesc}

        await fetch(url, {
            method: 'POST',
            headers: {  "Content-Type": "application/json"  },
            body: JSON.stringify(data)
        }).then(()=>{
            console.log('Updated')
        })

        window.location.reload(false);
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
                    <Form id='UpdateGroupForm' onSubmit={SubmitUpdateGroupForm}>
                        <Form.Group className="mb-3">
                            <Form.Label>Group Name</Form.Label>
                            <Form.Control name="groupName" type="text" defaultValue={props.group.group_Name} required />
                        </Form.Group>

                        <Form.Group className="mb-3">
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
            <Button type='submit' form='UpdateGroupForm' variant="primary">
                Save Changes
            </Button>
            </Modal.Footer>
        </>
    );
}

export default UpdateGroup;
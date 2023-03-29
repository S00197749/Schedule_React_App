import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function GroupSettings() {
     return (
        <Card body className="h-75">
            <Form id='GroupSettingsForm'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Group Name</Form.Label>
                    <Form.Control type="text" placeholder="Group Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as='textarea' rows={4} maxlength="200" style={{resize:'none'}} type="text" placeholder="Group Description" />
                </Form.Group>
            </Form>
        </Card>
    );
  }

export default GroupSettings;
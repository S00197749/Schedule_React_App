import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function GroupActivities() { 
    const [checked, setChecked] = useState(false);
    const [text, setText] = useState("");

    return (
        <Card body>
            <Form id='GroupActivitiesForm'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Activity Name</Form.Label>
                    <Form.Control type="text" placeholder="Activity Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as='textarea' rows={4} maxlength="200" style={{resize:'none'}} type="text" placeholder="Activity Description" />
                </Form.Group>

                <div className='row'>
                    <div class="form-group col-6 col-sm-4">
                        <Form.Check  
                            type="switch"
                            id="custom-switch"
                            label="Minimum Members"
                            checked={checked}
                            onChange={() => {
                                    if(checked){
                                    setText('')
                                    }
                                setChecked(!checked)
                                }
                            }
                        />
                    </div>
                    <div class="form-group col-6 col-sm-8">
                        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                            <Form.Control
                                type="number"
                                min="0"
                                hidden={!checked}
                                disabled={!checked}
                                value={text}
                                onChange={e => setText(e.target.value)}
                             />
                        </Form.Group>
                    </div>
                </div>
                
            </Form>
        </Card>
    );
  }

export default GroupActivities;
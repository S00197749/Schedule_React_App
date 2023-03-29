import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DisplayActivities(props) {
    return (
      <Card className='border border-secondary h-25 mt-2'>
        <Card.Body>
          <div className='row'>
            <div className='col-4 col-sm-6'>
              <h5>Activity Name</h5>
            </div>
            <div className='col-2'>
              <h5></h5>
            </div>
            <div className='col-6 col-sm-4'>
              <span>
                <Button onClick={() => props.callShowActivities()} variant='success' className='mr-2'>Edit</Button>
                <Button variant='danger' className='mx-2'>Remove</Button>
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }

export default DisplayActivities;
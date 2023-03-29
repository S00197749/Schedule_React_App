import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DisplayMembers() {
    return (
      <Card className='border border-secondary h-25'>
        <Card.Body>
          <div className='row'>
            <div className='col-3 col-sm-2'>
              <img src="img/avatars/avatar.png" class="avatar img-fluid rounded-circle me-1" alt="Member" />
            </div>
            <div className='col-6 col-sm-7'>
              <h4>Name</h4>
            </div>
            <div className='col-3'>
              <span>
                <Button variant='danger'>Remove</Button>
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }

export default DisplayMembers;
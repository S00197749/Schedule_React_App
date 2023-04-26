import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function GroupSidebar(props) {

  return (
    <>
      {props.groups.map(group =>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip>{group.group_Name}</Tooltip>}>

          <li class="sidebar-item mb-4 mx-2">
            <a onClick={() => props.callSetShowGroup(group.group_Id)} class="nav-link d-none d-sm-inline-block">
              <img src="img/avatars/group-icon.jpg" class="avatar img-fluid rounded-circle" alt={group.group_Name} />
            </a>
          </li>
        </OverlayTrigger>
      )}
    </>
  );
}

export default GroupSidebar;
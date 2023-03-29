import React, {useState} from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function GroupSidebar() {
  const [groups, setGroups] = useState([])

  const fetchData = async () => {
    const result = await fetch('https://schedule-functions.azurewebsites.net/api/GetGroups?code=TiTW1hY4v3MoXwWStwX1CffVdyoP0pQqFXD9iCUdocCmAzFu9aFojA==&user_id=1')
    const jsonResult = await result.json();

    setGroups(jsonResult)
  }

  React.useEffect(() => {

    fetchData()//first execution
  },[]);

  return (
    <>
      {groups.map(group =>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip>{group.group_Name}</Tooltip>}>

          <li class="sidebar-item mb-4 mx-2">
            <a class="nav-link d-none d-sm-inline-block" href='#'>
              <img src="img/avatars/avatar.png" class="avatar img-fluid rounded-circle" hover={group.Group_Name} alt={group.Group_Name} />
            </a>
          </li>
        </OverlayTrigger>
      )}
      </>
  );
}

export default GroupSidebar;
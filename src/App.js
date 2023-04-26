
import React, {useState} from "react";
import CreateGroup from "./components/Groups/CreateGroup";
import GroupSidebar from "./components/Groups/GroupSidebar";
import Main from "./components/Main";
import UserSchedule from "./components/Schedule/UserSchedule"
import DisplayInvites from "./components/Members/DisplayInvites";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

function App() {	
	const [groups, setGroups] = useState([]);
	const [showGroup, setShowGroup] = useState(0);
	const [invites, setInvites] = useState([]);
	const [showInvites, setShowInvites] = useState(false);

	const u = 2;
	
	const fetchGroupsData = async () => {
		const url = 'https://schedule-functions.azurewebsites.net/api/GetGroups?code=TiTW1hY4v3MoXwWStwX1CffVdyoP0pQqFXD9iCUdocCmAzFu9aFojA=='

		const result = await fetch(url + "&u=" + u)
		const jsonResult = await result.json();

		setGroups(jsonResult)
	}

	const fetchInvitesData = async () => {
		const url = 'https://schedule-functions.azurewebsites.net/api/GetInvites?code=ajrDFkpGyJs6pyJjid8oxUYDtnq6tZqfESiEUDv8MGuEAzFug1oDWQ=='

		const result = await fetch(url + "&u=" + u)
		const jsonResult = await result.json();

		setInvites(jsonResult)
	}

	React.useEffect(() => {

		fetchGroupsData();
		fetchInvitesData();
	  },[]);

	return (
	<div class="wrapper">
		<nav id="sidebar" class="custom-sidebar">
			<div class="sidebar-content js-simplebar">
				<ul class="sidebar-nav">
					<li class="sidebar-item mt-2">
						<a class="sidebar-link" href="#">
							<CreateGroup user_Id={u}></CreateGroup>
						</a>
					</li>
					<li class="sidebar-header mb-4">
						--------
					</li>
					<GroupSidebar callSetShowGroup={(group_Id)=> setShowGroup(group_Id)} groups={groups}></GroupSidebar>
				</ul>
			</div>
		</nav>
		<div class="main">
			<nav class="navbar navbar-expand navbar-light navbar-bg">
				<div class="navbar-collapse collapse d-flex justify-content-start">
					<a className="btn btn-primary justify-content-start" 
						onClick={() => setShowGroup(0)}>
						My Schedule
					</a>
					<a className="btn btn-success justify-content-start mx-4" 
						onClick={() => setShowInvites(true)}>
						Invites
					</a>
					<ul class="navbar-nav navbar-align">
						<li class="nav-item dropdown">
							<a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
								<i class="align-middle" data-feather="settings"></i>
							</a>
							<a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
								<img src="img/avatars/avatar.png" class="avatar img-fluid rounded-circle me-1" alt="Group" />
							</a>
							<div class="dropdown-menu dropdown-menu-end">
								<a class="dropdown-item" href="#"><i class="align-middle me-1" data-feather="user"></i> Profile</a>							
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">Settings</a>
								<a class="dropdown-item" href="#">Help</a>
								<a class="dropdown-item" href="#">Sign out</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>

			<main class="content">
				<div>
					<Modal 
					style={{
					maxHeight: '580px',
					margin: 0,
					position: 'absolute',
					top: '50%',
					transform: 'translateY(-50%)'
					}}
					scrollable={true} 
					backdrop="static" 
					show={showInvites} 
					onHide={() => setShowInvites(false)} 
					animation={false} 
					>
						<Modal.Header closeButton>
							<Modal.Title>My Invites</Modal.Title>
						</Modal.Header>
						<Modal.Body>

							{invites.map(invite =>
								<DisplayInvites user_Id={u} invite={invite}></DisplayInvites>
							)}

						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={() => setShowInvites(false)}>
							Close
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
				<div>
					{(() => {
						if(showGroup === 0) {
						return (
							<UserSchedule user_Id={u}/>
						)
						}
					})()}
				</div>

				{groups.map(group =>{
					if(showGroup === group.group_Id)
						return <Main group={group} user_Id={u}></Main>					
					}							
				)}
			</main>

			<footer class="footer">
			</footer>
		</div>
	</div>
	);
}

export default App;

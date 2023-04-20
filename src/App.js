
import React, {useState} from "react";
import CreateGroup from "./components/Groups/CreateGroup";
import GroupSidebar from "./components/Groups/GroupSidebar";
import Main from "./components/Main";

function App() {	
	const [groups, setGroups] = useState([]);
	const [showGroup, setShowGroup] = useState(0);

  	const url = 'https://schedule-functions.azurewebsites.net/api/GetGroups?code=TiTW1hY4v3MoXwWStwX1CffVdyoP0pQqFXD9iCUdocCmAzFu9aFojA==&user_id=1'
	const fetchData = async () => {
		const result = await fetch(url)
		const jsonResult = await result.json();

		setGroups(jsonResult)
	}

	React.useEffect(() => {

		fetchData();
	  },[]);

	return (
	<div class="wrapper">
		<nav id="sidebar" class="custom-sidebar">
			<div class="sidebar-content js-simplebar">
				<ul class="sidebar-nav">
					<li class="sidebar-item mt-2">
						<a class="sidebar-link" href="#">
							<CreateGroup></CreateGroup>
						</a>
					</li>
					<li class="sidebar-header mb-4">
						--------
					</li>
					<GroupSidebar callSetShowGroup={(group_Id)=>setShowGroup(group_Id)} groups={groups}></GroupSidebar>
				</ul>
			</div>
		</nav>
		<div class="main">
			<nav class="navbar navbar-expand navbar-light navbar-bg">
				<div class="navbar-collapse collapse">
					<ul class="navbar-nav navbar-align">
						<li>
							
						</li>
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
				{groups.map(group =>{
					if(showGroup === group.group_Id)
						return <Main group={group}></Main>
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

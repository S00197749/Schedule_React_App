
import React from "react";
import CreateGroup from "./components/CreateGroup";
import GroupMembers from "./components/GroupMembers";
import GroupSidebar from "./components/GroupSidebar";
import ManageGroup from "./components/ManageGroup";

function App() {

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
					<GroupSidebar></GroupSidebar>
				</ul>
			</div>
		</nav>
		<div class="main">
			<nav class="navbar navbar-expand navbar-light navbar-bg">
				<div class="navbar-collapse collapse">
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
				<div class="container-fluid p-0">
					<div class="row mb-2 mb-xl-3">
						<div class="col-auto d-none d-sm-block">
							<h3>Schedule</h3>
						</div>
						<div class="row justify-content-end">
							<div class="col-auto">
								<GroupMembers></GroupMembers>
								<ManageGroup></ManageGroup>
							</div>
						</div>
					</div>
					<div class="row mb-2 mb-xl-3">
						<div class="card">
							<div class="card-body">
								<div id="fullcalendar"></div>
							</div>
						</div>			
					</div>
				</div>
			</main>

			<footer class="footer">
			</footer>
		</div>
	</div>
  );
}

export default App;

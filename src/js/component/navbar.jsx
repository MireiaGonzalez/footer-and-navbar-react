import React from "react";

const Navbar = () => {
	return (
		<div id="navbar">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
				<div className="container-fluid ms-5">
					<span className="navbar-brand">Start Bootstrap</span>
				</div>
				<div className="d-flex me-5">
					<ul className="navbar-nav">
						<li className="nav-item me-2">
							<a href="#" className="nav-link">
								Home
							</a>
						</li>
						<li className="nav-item me-2">
							<a href="#" className="nav-link">
								About
							</a>
						</li>
						<li className="nav-item me-2">
							<a href="#" className="nav-link">
								Services
							</a>
						</li>
						<li className="nav-item me-2">
							<a href="#" className="nav-link">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

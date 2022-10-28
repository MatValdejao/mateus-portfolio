import React from "react";

function Nav(props) {
	const {
		setProjectsSelected,
		projectsSelected,
		setContactSelected,
		contactSelected,
	} = props;

	return (
		<nav>
			<ul className="flex-row">
				<li className="mx-2">
					<a
                        data-testid="about"
                        href="#about"
                        className="link"
                        onClick={() => {
                            setProjectsSelected(false)
                            setContactSelected(false)
                        }}
					>
						About Me
					</a>
				</li>
				<li className={`mx-2 ${projectsSelected}`}>
					<a
                        data-testid="portfolio"
                        href="#portfolio"
                        className="link"
                        onClick={() => {
                            setContactSelected(false) && setProjectsSelected(true)
                        }}
					>
						Portfolio
					</a>
				</li>
				<li className={`mx-2 ${contactSelected}`}>
					<a
                        data-testid="contact"
                        href="#contact"
                        className="link"
                        onClick={() => {
                            setProjectsSelected(false) && setContactSelected(true)
                        }}
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;

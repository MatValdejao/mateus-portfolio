import React from "react";

function Nav(props) {
	const {
		setPortfolioSelected,
		portfolioSelected,
		setContactSelected,
		contactSelected,
		setResumeSelected, 
		resumeSelected
	} = props;

	return (
		<nav>
			<ul className="flex-row">
				<li className="mx-2-right">
					<a
                        data-testid="about"
                        href="#about"
                        className="link"
                        onClick={() => {
                            setPortfolioSelected(false)
							setContactSelected(false)
							setResumeSelected(false)
                        }}
					>
						About Me
					</a>
				</li>
				<li className={`mx-2-right ${portfolioSelected}`}>
					<a
                        data-testid="portfolio"
                        href="#portfolio"
                        className="link"
                        onClick={() => {
							setContactSelected(false)
							setPortfolioSelected(true)
							setResumeSelected(false)
                        }}
					>
						Portfolio
					</a>
				</li>
				<li className={`mx-2-right ${contactSelected}`}>
					<a
                        data-testid="contact"
                        href="#contact-form"
                        className="link"
                        onClick={() => {
							setContactSelected(true)
							setPortfolioSelected(false)
							setResumeSelected(false)
                        }}
					>
						Contact
					</a>
				</li>
				<li className={`mx-2-right ${resumeSelected}`}>
					<a
                        data-testid="resume"
						href="#resume"
                        className="link"
                        onClick={() => {
							setContactSelected(false)
							setPortfolioSelected(false)
							setResumeSelected(true)
                        }}
					>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;

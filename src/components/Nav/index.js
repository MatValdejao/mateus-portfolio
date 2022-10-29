import React from "react";

function Nav(props) {
	const {
		setPortfolioSelected,
		portfolioSelected,
		setContactSelected,
		contactSelected,
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

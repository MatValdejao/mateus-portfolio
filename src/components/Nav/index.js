import React from "react";

function Nav() {
	return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a data-testid="about" href="#about" className="link">
                        About Me
                    </a>
                </li>
                <li className="mx-2">
                    <a data-testid="portfolio" href="#portfolio" className="link">
                        Portfolio
                    </a>
                </li>
                <li className="mx-2">
                    <a data-testid="contact" href="#contact" className="link">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
	);
}

export default Nav;

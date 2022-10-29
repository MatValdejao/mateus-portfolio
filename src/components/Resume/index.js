import React from "react";

function Resume() {
    return (
			<>
				<section>
					<h1 class="section-title" id="portfolio" data-testid="h1tag">
						Resume
					</h1>
					<button>
						<a
							className="link"
							href="./assets/images/Résumé  (17).pdf"
							target="_blank"
						>
							Resume
						</a>
					</button>
					<h3>Proficiencies</h3>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
					</ul>
				</section>
			</>
		);
}

export default Resume

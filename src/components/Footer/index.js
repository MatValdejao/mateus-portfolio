import React from "react";

function Footer() {
	return (
		<footer>
			<address className="flex-row">
				<div className="mx-2">
					<a
						rel="noreferrer"
						href="mailto:matvaldejao123@gmail.com"
						target="_blank"
					>
						matvaldejao123@gmail.com
					</a>
				</div>
				<div className="mx-2">
					<a
						rel="noreferrer"
						href="https://github.com/MatValdejao"
						target="_blank"
					>
						GitHub
					</a>
				</div>
				<div className="mx-2">
					<a
						rel="noreferrer"
						href="https://www.linkedin.com/in/mateusvaldejao/"
						target="_blank"
					>
						LinkedIn
					</a>
				</div>
				<div className="mx-2">
					<a
						rel="noreferrer"
						href="https://www.instagram.com/mateusvaldejao/"
						target="_blank"
					>
						Instagram
					</a>
				</div>
			</address>
		</footer>
	);
}

export default Footer;

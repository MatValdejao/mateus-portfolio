import React from "react";

function Footer() {
	return (
		<footer>
			<address className="flex-row footer">
				<div className="mx-2">
					<a
						data-testid="github"
						rel="noreferrer"
						href="https://github.com/MatValdejao"
						target="_blank"
					>
						<img className="link-image "alt="GitHub" src={require("../../assets/images/github.png")} />
					</a>
				</div>
				<div className="mx-2">
					<a
						data-testid="linkedin"
						rel="noreferrer"
						href="https://www.linkedin.com/in/mateusvaldejao/"
						target="_blank"
					>
						<img
							className="link-image"
							alt="LinkedIn"
							src={require("../../assets/images/linkedin.png")}
						/>
					</a>
				</div>
				<div className="mx-2">
					<a
						data-testid="instagram"
						rel="noreferrer"
						href="https://www.instagram.com/mateusvaldejao/"
						target="_blank"
					>
						<img className="link-image" alt="Instagram" src={require("../../assets/images/Instagram.png")} />
					</a>
				</div>
			</address>
		</footer>
	);
}

export default Footer;

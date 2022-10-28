import React from "react";

function About() {
	return (
		<section id="about" className="flex-row">
			<div>
				<h2 className="section-title">About Me</h2>
			</div>
			<div>
				<p>
					My name is Mateus Valdejão. I sm currently a student, at the Junior
					level, at the University of North Carolina at Chapel Hill. There, I
					study Biomedical Engineering but am also pursuing a minor in Data
					Science. Currently, I work in a Baston based company called Be Bio.
				</p>{" "}
				<br />
				<p>
					In my free time, I love playing sports as well as watching them. My
					favorite sport is soccer and I support a Brazilian team called Gremio.
					Furthermore, I really enjoy watching Netflix and YouTube. Reading is
					one of my favorite passtimes, mostly nonfictional books, although I do
					like some fiction occasionally. My favorite book is "The Rise and Fall
					of Nations" by Ruchir Sharma.
				</p>
			</div>
		</section>
	);
}

export default About;

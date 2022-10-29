import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function ProjectList() {
	const [projects] = useState([
		{
			name: "Movie Mate",
			link: "https://matvaldejao.github.io/movie-mate/",
			github: "https://github.com/MatValdejao/movie-mate",
		},
		{
			name: "Gift Pilot",
			link: "https://gift-pilot.herokuapp.com/",
			github: "https://github.com/MatValdejao/gift-pilot",
		},
		{
			name: "Horiseon",
			link: "https://matvaldejao.github.io/Refactoring-Horiseon-Website/",
			github: "https://github.com/MatValdejao/Refactoring-Horiseon-Website",
		},
		{
			name: "Run Buddy",
			link: "https://matvaldejao.github.io/run-buddy/",
			github: "https://github.com/MatValdejao/run-buddy",
		},
		{
			name: "Robot Gladiators",
			link: "https://matvaldejao.github.io/robot-gladiators/",
			github: "https://github.com/MatValdejao/robot-gladiators",
		},
		{
			name: "Photo Port",
			link: "https://matvaldejao.github.io/photo-port/",
			github: "https://github.com/MatValdejao/photo-port",
		},
	]);

	return (
		<div className="flex-row">
			{projects.map((project, i) => (
				<div className="projects-list" key={project.name}>
					<h2>{capitalizeFirstLetter(project.name)}</h2>
					<a
						data-testid={project.name}
						rel="noreferrer"
						href={project.link}
						target="_blank"
						className="link"
					>
						<img
							className="img-thumbnail mx-1"
							src={require(`../../assets/images/${project.name}.png`)}
							alt={project.name}
						/>
					</a>
					<br />
					<a
						alt="GitHub link"
						className="link github-link"
						target="_blank"
						rel="noreferrer"
						href={project.github}
					>
						<h4>GitHub</h4>
					</a>
				</div>
			))}
		</div>
	);
}

export default ProjectList;

import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function ProjectList() {
	const [projects] = useState([
		{
			name: "Movie Mate",
			link: "https://matvaldejao.github.io/movie-mate/",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			github: "https://github.com/MatValdejao/movie-mate",
		},
		{
			name: "Gift Pilot",
			link: "https://gift-pilot.herokuapp.com/",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			github: "https://github.com/MatValdejao/gift-pilot",
		},
		{
			name: "Horiseon",
			link: "https://matvaldejao.github.io/Refactoring-Horiseon-Website/",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			github: "https://github.com/MatValdejao/Refactoring-Horiseon-Website",
		},
		{
			name: "Run Buddy",
			link: "https://matvaldejao.github.io/run-buddy/",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			github: "https://github.com/MatValdejao/run-buddy",
		},
		{
			name: "Robot Gladiators",
			link: "https://matvaldejao.github.io/robot-gladiators/",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			github: "https://github.com/MatValdejao/robot-gladiators",
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
							alt={project.description}
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

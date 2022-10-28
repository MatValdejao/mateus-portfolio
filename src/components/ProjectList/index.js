import React, { useState } from "react";

function ProjectList() {
	const [projects] = useState([
		{
			name: "Movie Mate",
			link: "https://matvaldejao.github.io/movie-mate/",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			technologies: "",
		},
		{
			name: "Gift Pilot",
			link: "https://gift-pilot.herokuapp.com/",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			technologies: "",
		},
		{
			name: "Horiseon",
			link: "https://matvaldejao.github.io/Refactoring-Horiseon-Website/",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			technologies: "",
		},
		{
			name: "Run Buddy",
			link: "https://matvaldejao.github.io/run-buddy/",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			technologies: "",
		},
		{
			name: "Robot Gladiators",
			link: "https://matvaldejao.github.io/robot-gladiators/",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
			technologies: "",
		},
	]);

	return (
		<div className="flex-row">
			{projects.map((project, i) => (
				<a rel="noreferrer" href={project.link} target="_blank">
                    {project.name}
                    <br/>
                    <img
					className="img-thumbnail mx-1"
					src={require(`../../assets/images/${project.name}.png`)}
					alt={project.description}
					key={project.name} />
				</a>
			))}
		</div>
	);
}

export default ProjectList;

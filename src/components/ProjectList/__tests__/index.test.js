import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProjectList from "../";

afterEach(cleanup);

describe("ProjectList component", () => {
	it("renders", () => {
		render(<ProjectList />);
	});

	it("matches snapshot", () => {
		const { asFragment } = render(<ProjectList />);

		expect(asFragment()).toMatchSnapshot();
	});
});

it("links are visible", () => {
    render(<ProjectList />)
    
    expect(screen.getByTestId("Gift Pilot")).toHaveTextContent("Gift Pilot")
    expect(screen.getByTestId("Horiseon")).toHaveTextContent("Horiseon")
    expect(screen.getByTestId("Robot Gladiators")).toHaveTextContent("Robot Gladiators")
    expect(screen.getByTestId("Movie Mate")).toHaveTextContent("Movie Mate")
    expect(screen.getByTestId("Run Buddy")).toHaveTextContent("Run Buddy")
})

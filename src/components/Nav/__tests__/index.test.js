import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
	it("renders", () => {
		render(<Nav />);
	});

	it("matches snapshot", () => {
		const { asFragment } = render(<Nav />);
		expect(asFragment()).toMatchSnapshot();
	});
});

it("links are visible", () => {
	render(<Nav />);
	expect(screen.getByTestId("about")).toHaveTextContent("About Me");
	expect(screen.getByTestId("portfolio")).toHaveTextContent("Portfolio");
	expect(screen.getByTestId("contact")).toHaveTextContent("Contact");
});

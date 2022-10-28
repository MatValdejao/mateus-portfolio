import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
	it("render", () => {
		render(<About />);
	});

	it("matches snapshot", () => {
		const { asFragment } = render(<About />);

		expect(asFragment()).toMatchSnapshot();
	});
});

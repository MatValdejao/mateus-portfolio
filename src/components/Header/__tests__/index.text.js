import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "..";


afterEach(cleanup)

describe("Header component", () => {
    it("renders", () => {
        render(<Header/>)
    })

    it("matches snapshot", () => {
        const { asFragment } = render(<Header />)
        expect(asFragment()).toMatchSnapshot()
    })
})


it("links are visible", () => {
    render(<Header />)

    expect(screen.getByTestId("header")).toHaveTextContent("Mateus Valdejao")
})
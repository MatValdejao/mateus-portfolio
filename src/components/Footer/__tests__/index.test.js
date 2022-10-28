import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "..";

afterEach(cleanup)

describe("footer component", () => {
    it("renders", () => {
        render(<Footer/>)
    })

    it("matches snapshot", () => {
        const { asFragment } = render(<Footer />)
        
        expect(asFragment()).toMatchSnapshot()
    })
})


it("links are visible", () => {
    render(<Footer />)
    
    expect(screen.getByTestId("github")).toHaveTextContent("GitHub")
    expect(screen.getByTestId("linkedin")).toHaveTextContent("LinkedIn")
    expect(screen.getByTestId("instagram")).toHaveTextContent("Instagram")
})

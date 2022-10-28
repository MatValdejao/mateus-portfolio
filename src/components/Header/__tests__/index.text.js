import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "..";


afterEach(cleanup)

describe("Header component")

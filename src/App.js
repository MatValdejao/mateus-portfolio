import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App() {

	// set States
	const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false)

	return (
		<>
			<Header></Header>
			{/* feed props to Nav */}
			<Nav
				setContactSelected={setContactSelected}
				contactSelected={contactSelected}
				setPortfolioSelected={setPortfolioSelected}
        portfolioSelected={portfolioSelected}
        setResumeSelected={setResumeSelected}
        resumeSelected={resumeSelected}
			></Nav>
			<div>
				{/* conditionally rendering components */}
				{contactSelected ? (
						<ContactForm></ContactForm>
				) : portfolioSelected ? (
					<Portfolio></Portfolio>
				) : resumeSelected ? (
					<Resume></Resume>
				) : (<About></About>)}
			</div>
			<Footer />
		</>
	);
}

export default App;

import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import { useState } from 'react';

function App() {
  const [setContactSelected, contactSelected] = useState(false)
  const [setPortfolioSelected, portfolioSelected] = useState(false)

  return (
		<>
			<Header></Header>
      <Nav
        setContactSelected={setContactSelected}
        contactSelected={contactSelected}
        setPortfolioSelected={setPortfolioSelected}
        portfolioSelected={portfolioSelected}
      ></Nav>
      <div>
        <About></About>
        <Portfolio></Portfolio>
        {contactSelected && <ContactForm></ContactForm>}
      </div>
      <Footer/>
    </>
	);
}

export default App;

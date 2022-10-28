import React, {useState} from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  const [setProjectsSelected, projectsSelected] = useState(false)
  const [setContactSelected, contactSelected] = useState(false)

  return (
		<>
			<Header></Header>
			<Nav
				setProjectsSelected={setProjectsSelected}
				projectsSelected={projectsSelected}
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
			></Nav>
			<div>
				<About></About>
				{projectsSelected && <Portfolio></Portfolio>}
			</div>
			<Footer />
		</>
	);
}

export default App;

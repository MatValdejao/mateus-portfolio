import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
		<>
			<Header></Header>
      <Nav></Nav>
      <div>
        <About></About>
      </div>
      <div>
        <Portfolio/>
      </div>
      <Footer/>
    </>
	);
}

export default App;

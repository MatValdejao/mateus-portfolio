import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
		<>
			<Header></Header>
      <Nav></Nav>
      <div>
        <About></About>
      </div>
    </>
	);
}

export default App;

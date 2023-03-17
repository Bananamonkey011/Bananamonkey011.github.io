import './App.css';
import Landing from './Sections/Landing';
import About from './Sections/About';
import Experience from './Sections/Experience';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';


function App() {
  return (
    <div className="App">
      <Landing/>
      <About />
      <Experience/>
	  <Projects/>
	  <Contact/>
    </div>
  );
}

export default App;

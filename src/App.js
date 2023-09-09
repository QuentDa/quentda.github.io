import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import RichText from './components/RichText/RichText';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <RichText />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;

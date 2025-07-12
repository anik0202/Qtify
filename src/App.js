import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import Section from './components/Section/Section';


function App() {
  return (
    <div className="App" style={{ backgroundColor: "var(--color-secondary)" }}>
      <Navbar />
      <Hero />
      <Section />
    </div>
  );
}

export default App;

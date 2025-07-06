import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';


function App() {
  return (
    <div className="App" style={{ backgroundColor: "var(--color-secondary)" }}>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;

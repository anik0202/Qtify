import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';


function App() {
  return (
    <div className="App" style={{ backgroundColor: "var(--color-secondary)" }}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;

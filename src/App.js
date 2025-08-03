import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import Section from './components/Section/Section';
import API from './API/ApiCalls.json';


function App() {
  return (
    <div className="App" style={{ backgroundColor: "var(--color-secondary)" }}>
      <Navbar />
      <Hero />
      <Section title='Top Albums' API={`${API.topAlbums}`}/>
      <Section title='New Albums' API={`${API.newAlbums}`}/>
      <Section title="Songs" API={`${API.songs}`}/>
    </div>
  );
}

export default App;
